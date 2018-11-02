const express = require('express');
const router = express.Router();
var checkToken = require('../checkToken');


let home_controller = require('../controllers/homeController');

router.get('/', home_controller.index);
router.get('/user', home_controller.getAll);
router.post('/register', home_controller.register);
router.put('/update', home_controller.update);
//router.post('/authenticate', home_controller.authenticate);
router.get('/token',checkToken, home_controller.userToken);
router.post('/login', home_controller.userLogin);
router.post('/logout', home_controller.userLogout);

module.exports = router;