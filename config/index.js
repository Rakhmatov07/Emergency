require('dotenv/config');
const {env} = process;

const config = {
    port: 8080,
    jwt_key: "env.jwt_secret"
}

module.exports = config;

