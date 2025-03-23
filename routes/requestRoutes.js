const express = require('express');
const { createRequest, getAllRequests } = require('../controllers/requestController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/create', protect, createRequest);
router.get('/', getAllRequests);

module.exports = router;
