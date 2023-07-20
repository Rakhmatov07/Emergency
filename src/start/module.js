const express = require('express');
const cors = require('cors');
const app_router = require('../api/app_routes');

const modules = (app) => {
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    app.use(cors({origin: '*'}));
    app.use('/api', app_router);

    app.set("view engine", "ejs");
    app.set("views", "src/views");
}

module.exports = modules;