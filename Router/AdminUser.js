const express  = require('express');
const { GetAdmins,RegisterAdmins,LoginAdmin,DeleteAdmin }  = require('../Controller/AdminUser.js');
const router = express.Router();
router.get('/api/admins',GetAdmins);
router.post('/api/registeradmin',RegisterAdmins);
router.post('/api/loginadmin',LoginAdmin);
router.get('/api/delete/:id',DeleteAdmin)

module.exports = router