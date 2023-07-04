// backend/routes/connectionRoutes.js
const express = require('express');
const { logConnection } = require('../controllers/connectionController');

const router = express.Router();

router.get('/api/connection-maker', logConnection);

module.exports = router;
