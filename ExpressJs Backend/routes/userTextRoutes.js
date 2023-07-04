const express = require('express');
const { logUserText } = require('../controllers/userTextController');

const router = express.Router();

router.post('/api/insert-text', logUserText);

module.exports = router;
