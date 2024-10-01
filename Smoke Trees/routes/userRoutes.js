const express = require('express');
const {register, getAddresses} = require('../controller/userController');








const userRoutes = express.Router();



userRoutes.post('/register',register)
userRoutes.get('/get',getAddresses)


module.exports = userRoutes;