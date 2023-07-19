const express = require('express');
const app = express();
const run = require('./start/run');
const modules = require('./start/module');

modules(app);
run(app);