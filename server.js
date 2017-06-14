const express = require('express');
const app = express();
const bp = require('body-parser');
const path = require('path');
const axios = require('axios')
const PORT = 8000;

app.use(bp.urlencoded({extended:true}))

require('./routes.js')(app);

app.listen(PORT, ()=>{
    console.log('Server on Port: ', PORT)
})