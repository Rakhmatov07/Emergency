const {Pool} = require('pg');
const config = require('../../config');
require("dotenv").config()

console.log(config.dbUrl);

const pool = new Pool({
    connectionString: config.dbUrl // "postgres://postgres:1207@localhost:5432/emergency"
});

const fetch = async(SQL, ...values) => {
    const client = await pool.connect();
    try {
        const {rows} = await client.query(SQL, values.length ? values : null);
        return rows;
    } catch (error) {
        console.log(error);
    } finally {
        client.release();
    }
};

const fetchOne = async(SQL, ...values) => {
    const client = await pool.connect();
    try {
        const {rows: [row]} = await client.query(SQL, values.length ? values : null);
        return row;
    } catch (error) {
        console.log(error);
    } finally {
        client.release();
    }
};

module.exports = {
    fetch,
    fetchOne
};