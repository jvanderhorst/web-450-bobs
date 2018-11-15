const express = require('express');
const router = express.Router();
const checkToken = require('../checkToken');

let home_controller = require('../controllers/homeController');
//user http request
router.get('/', home_controller.index);
router.get('/user', home_controller.getAll);
router.get('/profile/:id', home_controller.getProfile);
router.post('/register', home_controller.register);
router.put('/update', home_controller.update);
//router.post('/authenticate', home_controller.authenticate);
router.get('/token',checkToken, home_controller.userToken);
router.post('/login', home_controller.userLogin);
router.post('/logout', home_controller.userLogout);
// role http requests
router.get('/role', home_controller.getRoles);
router.post('/addRole', home_controller.addRole);
router.delete('/removeRole/:roleId', home_controller.deleteRole);
router.put('/updateRole/:roleId', home_controller.updateRole);
// question http request
router.get('/question', home_controller.getQuestions);
router.post('/addQuestion', home_controller.addQuestion);
router.delete('/removeQuestion/:questionId', home_controller.deleteQuestion);
router.put('/updateQuestion/:questionId', home_controller.updateQuestion);
// repair http request
router.get('/repair', home_controller.getRepair);
router.post('/addRepair', home_controller.addRepair);
// log file http request
router.get('/log', home_controller.log);

module.exports = router;