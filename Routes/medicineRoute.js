const express = require('express');
const router = express.Router();
const { getMedicineInfo } = require('../Controllers/medicineController');

// Route to get detailed information about a medicine
router.post('/medicine-info', getMedicineInfo);

module.exports = router;
