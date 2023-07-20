const {Pool} = require('pg');
require("dotenv").config()

const pool = new Pool({
    connectionString: process.env.PG_URL // "postgres://postgres:1207@localhost:5432/emergency"
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