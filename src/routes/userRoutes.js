// Modulos y Constantes

const express = require('express');
const router = express.Router();
const usersController = require('../controllers/userController');

// Formulario de Login

router.get('/login', usersController.login);

// Formulario de Registro


router.get('/register',usersController.register);

// Perfil de Usuario

router.get('/profile/:userId', usersController.profile);

// Exporta modulo

module.exports = router;