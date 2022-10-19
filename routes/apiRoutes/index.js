
const router = require('express').Router();


const newReminderPath = require('./noteRoutes')


router.use(newReminderPath);



module.exports = router;

