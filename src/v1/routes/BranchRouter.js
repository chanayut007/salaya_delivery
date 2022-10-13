const express = require('express');
const router = express.Router();
const BranchController = require('./../controller/BranchController');

router.get('/nearby', BranchController.getBranchNearby);

module.exports = router;