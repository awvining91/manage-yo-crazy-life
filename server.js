

const PORT = process.env.PORT || 3308;

const express = require('express');

const app = express();


const fs = require('fs');

const path = require('path');


const apiRoutes = require('./routes/apiRoutes');

const htmlRoutes = require('./routes/htmlRoutes');



app.use(express.urlencoded({
    extended: true
}));



app.use(express.json());


app.use('/api', apiRoutes);

app.use('/', htmlRoutes);


app.listen(PORT, () => {
  


    console.log(`Your awesome site should be on port ${PORT}!`);
});



