const express = require('express')
const router = express.Router();
const controller = require('./controller');
router.get('/', controller.getUsers);
router.get('/:id', controller.getUser);
router.post('/', controller.createUser);
module.exports = router;