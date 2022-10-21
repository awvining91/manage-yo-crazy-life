


const router = require("express").Router();

//Initializw app, and history of notes

const {

    notes
    
} = require('../../db/db');


//link to add and delete functions, in another folder for modularization

const {
    addReminder,

    eraseReminder
} = require('../../commands/reminderCommands');

//These methods get, post and delete note data 

router.get('/notes', (req, res) => {

    let saved = notes;

    res.json(saved);
})

router.post('/notes', (req, res) => {
    
    req.body.id = notes.length.toString();

    let note = addReminder(req.body, notes);

    res.json(note);
})

router.delete('/notes/:id', (req, res) => {

    eraseReminder(notes, req.params.id);

    res.json(notes);
 })


module.exports = router;

/*

 https://stackoverflow.com/questions/46082711/node-express-file-paths

- https://betterprogramming.pub/simple-notes-app-with-node-js-and-mongoosejs-6595cd5d15b

- https://www.geeksforgeeks.org/how-to-build-note-taking-application-using-node-js/

- https://medium.com/@nnamani.ezinne/simple-note-taking-app-using-node-js-and-ejs-4899321a3342


*/