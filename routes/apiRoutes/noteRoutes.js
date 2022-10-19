
const router = require("express").Router();

const {
    entry
} = require('../../db/db');


const {
    addReminder,

    eraseReminder

} = require('../../lib/noteFunctions');


router.get('/entry', (req, res) => {

    let remember = entry;

    res.json(remember);
})


router.post('/entry', (req, res) => {
   
    req.body.id = entry.length.toString();

    let todo = addReminder(req.body, entry);

    res.json(todo);
})


router.delete('/entry/:id', (req, res) => {

    eraseReminder(entry, req.params.id);

    res.json(entry);
 })

module.exports = router;