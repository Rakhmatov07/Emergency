require('dotenv/config');
const {env} = process;

const config = {
    port: env.PORT,
    jwt_key: env.jwt_secret,
    dbUrl: env.PG_URL
}

module.exports = config;

