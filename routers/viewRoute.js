const express = require('express');
const { viewAll, assigned, notAssigned, available } = require('../controllers/viewController');

const router = express.Router();

router.get('/view-all', viewAll);
router.get('/assigned', assigned);
router.get('/not-assigned', notAssigned);
router.get('/available', available);


module.exports = router;