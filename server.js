
const PORT = process.env.PORT || 3308;

const express = require('express');

const app = express();


const fs = require('fs');

const path = require('path');


const apiRoads = require('./roads/apiRoads');

const htmlRoads = require('./roads/htmlRoads');



app.use(express.urlencoded({
    extended: true
}));


app.use(express.static('public'));

app.use(express.json());


app.use('/api', apiRoads);

app.use('/', htmlRoads);


app.listen(PORT, () => {



    console.log(`Your awesome website is here: ${PORT}!`);
});






