var express = require('express');
const { getUsers, getUser, removeUsers, AddUsers, UdapteUsers, reg, login, logi, profile } = require('../controllers/addUsers');
const chekauth = require('../Middlewares/UserWare');
var router = express.Router();
router.get('/profile',chekauth ,profile)
router.get('/',getUser)
router.get('/:id',getUsers)
router.post('/',AddUsers)
router.post('/register',reg)
router.post('/login',logi)
router.put('/:id',UdapteUsers)
router.delete('/:id',removeUsers)

module.exports = router;
