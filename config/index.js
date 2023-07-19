require('dotenv/config');
const {env} = process;

const config = {
    port: +env.port,
    jwt_key: env.jwt_secret
}

module.exports = config;

