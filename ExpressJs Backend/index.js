const db = require('./db');
const express = require('express')
const connectionRoutes = require('./routes/connectionRoutes')
const userTextLog = require('./routes/userTextRoutes')
const cors = require('cors');
const app = express()
const port = 5000

app.use(cors());

db();

app.use('/', connectionRoutes);

app.use(express.json());

app.use('/', userTextLog);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})