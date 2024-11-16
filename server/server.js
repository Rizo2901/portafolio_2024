
const express = require('express');
const path = require('path');
const cors = require('cors');
const { connectToDatabase } = require('./database'); 

const app = express();
const PORT = 5173;

connectToDatabase(); 

const corsOptions = {
    origin: [' http://localhost:5173/'],
};

app.use(cors(corsOptions));

app.use(express.static(path.join(__dirname, '../client')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
});

console.log(`http://localhost:${PORT}`);
