const {fetch, fetchOne} = require('../../lib/pg');
const jwt = require('../../lib/jwt');
const {authValidation} = require('../../lib/validation');
const reverseGeocode = require('../../lib/location');

const login = async(req, res) => {
    try {
        const {username, phone_number, phone_type, location, language} = req.body;
        console.log(isValid);
        const isValid = authValidation(username, phone_number);
        if(isValid) return res.status(403).json({message: 'Validation Error'});
        
        const user = await fetchOne('SELECT * FROM users WHERE phone_number=$1;', phone_number);
        if(user){
            const token = jwt.sign(user.user_id);
            return res.status(200).json({message: 'Success', token});
        }else{
            const country = await reverseGeocode(location.lat, location.long);
            const newUser = await fetchOne('INSERT INTO users(username, phone_number, phone_type, country, language) VALUES($1, $2, $3, $4, $5) RETURNING*', username, phone_number, phone_type, country, language);
            const token = jwt.sign(newUser.user_id);
            console.log(newUser);
            return res.status(200).json({message: 'Success', token});
        } 
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message});
    }
    
};

const loginPage = (req, res) => {
    return res.render('registration');
}


module.exports = {
    login,
    loginPage
}