// backend/controllers/connectionController.js
const ConnectionLog = require('../models/ConnectionLog');

const logConnection = async (req, res) => {
  try {
    let connectionLog = await ConnectionLog.findOne();
    
    if (connectionLog) {
      connectionLog.count += 1;
    } else {
      connectionLog = new ConnectionLog();
      connectionLog.count = 1;
    }

    let y= connectionLog.count;

    await connectionLog.save();

    res.json({ message: 'Connection logged successfully' ,y: y});
  } catch (error) {
    console.error('Error logging connection:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { logConnection };
