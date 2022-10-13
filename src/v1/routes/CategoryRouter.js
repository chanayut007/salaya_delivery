const express = require('express');
const router = express.Router();
const CategoryController = require('./../controller/CategoryController');

router.get('/', CategoryController.getAllCategory);

module.exports = router;