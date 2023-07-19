const Jwt = require('jsonwebtoken');
const {jwt_key} = require('../../config');

const sign = (payload) => Jwt.sign(payload, jwt_key);
const verify = (payload) => Jwt.verify(payload, jwt_key);

module.exports = {
    sign,
    verify
}
