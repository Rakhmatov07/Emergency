const { login, loginPage } = require('../controllers/auth.controller');

const router = require('express').Router();

router.post('/app/v1/login', login);
router.get('/app/v1/login', loginPage);

module.exports = router;