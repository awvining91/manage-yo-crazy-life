
const router = require("express").Router();

const {

    notes
    
} = require('../../db/db');

const {
    addReminder,
    eraseReminder
} = require('../../commands/reminderCommands');


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