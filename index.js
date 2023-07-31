const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.send('Hello from chatter server');
});

app.listen(port, () => {
    console.log(`Server is running on port:${port}`);
});