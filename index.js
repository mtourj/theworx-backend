require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(helmet());

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
})