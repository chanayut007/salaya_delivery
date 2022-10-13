const express = require('express');
const router = express.Router();
const CheckoutController = require('./../controller/CheckoutController');

router.post('/', CheckoutController.checkout);

module.exports = router;