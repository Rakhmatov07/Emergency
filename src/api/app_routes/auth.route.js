const { login } = require('../controllers/auth.controller');

const router = require('express').Router();

router.post('/app/v1/login', login);

module.exports = router;