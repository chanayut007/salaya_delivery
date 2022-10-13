const express = require('express');
const router = express.Router();
const ProductController = require('./../controller/ProductController');

router.get('/recommend', ProductController.getProductRecommend);

router.get('/category/:categoryType', ProductController.getAllProductByCategoryId);

router.get('/:productId/details', ProductController.getProductDetailsById);

router.get('/search', ProductController.searchProductByName);

module.exports = router;

