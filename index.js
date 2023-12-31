const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/auth.js');

const app = express();
const port = process.env.PORT || 5000;

require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.send('Hello from chatter server');
});

app.use('/auth', authRoutes);

app.listen(port, () => {
    console.log(`Server is running on port:${port}`);
});