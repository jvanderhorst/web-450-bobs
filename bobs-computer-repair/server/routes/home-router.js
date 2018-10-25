const express = require('express');
const router = express.Router();

let home_controller = require('../controllers/homeController');

router.get('/', home_controller.index);
router.get('/user', home_controller.getAll);
router.post('/register', home_controller.register);
router.put('/update', home_controller.update);

module.exports = router;