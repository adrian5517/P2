require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(3000, () =>{
    console.log(`server is running on port ${port}`);
})