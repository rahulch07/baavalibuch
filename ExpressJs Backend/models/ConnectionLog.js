// backend/models/ConnectionLog.js
const mongoose = require('mongoose');

const connectionLogSchema = new mongoose.Schema({
  timestamp: { type: Date, default: Date.now },
  count: { type: Number, default: 0 },
});

const ConnectionLog = mongoose.model('ConnectionLog', connectionLogSchema);

module.exports = ConnectionLog;