
// This creates a new object for the router

const router = require('express').Router();

// updated path
const reminderPath = require('./reminderPath')


router.use(reminderPath);



module.exports = router;



