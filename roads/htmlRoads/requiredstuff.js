//This links the index and notes html files in the public folder, the front-end starter code

const path = require('path');

const router = require('express').Router();


router.get('/notes', (req, res) => {

    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

router.get("*", (req, res) => {
    
    res.sendFile(path.join(__dirname, '../../public/index.html'));
})

module.exports = router;