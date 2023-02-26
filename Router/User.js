const express = require('express');
const { getUsers,addUsers, deleteUser, updateUser, loginUser } = require('../Controller/User.js');
const router = express.Router();

router.get('/api/users',getUsers);
router.post('/api/registeruser',addUsers);
router.get('/api/deleteuser/:id',deleteUser);
router.put('/api/updateuser/:id',updateUser);
router.post('/api/loginuser',loginUser);

module.exports = router