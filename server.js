
//This sets up which awesome port the app will show up on

const PORT = process.env.PORT || 3308;

const express = require('express');

const app = express();

//These are some needed dependencies for the app to work

const fs = require('fs');

const path = require('path');


const apiRoads = require('./roads/apiRoads');

const htmlRoads = require('./roads/htmlRoads');



app.use(express.urlencoded({
    extended: true
}));

//Here is middleware, some of which sets up the routes and directories
app.use(express.static('public'));

app.use(express.json());


app.use('/api', apiRoads);

app.use('/', htmlRoads);


app.listen(PORT, () => {



    console.log(`Your awesome website is here: ${PORT}!`);
});


/* References

- https://betterprogramming.pub/simple-notes-app-with-node-js-and-mongoosejs-6595cd5d15b

- https://www.geeksforgeeks.org/how-to-build-note-taking-application-using-node-js/

*/



