const express = require('express');
const app = express();
const bP = require('body-parser');
const path = require('path');
const PORT = 8000;
const axios = require('axios');

const db = require('./firebase')

// console.log(db.ref('/users/0')); 
app.use(bP.urlencoded({extended: true}));


app.listen(PORT, () => {
    console.log(`Running on ${PORT}`);
}); 