
const fs = require("fs");


const path = require("path");


function addReminder(data, reminderData) {

    const note = data;

    reminderData.push(note);

    fs.writeFileSync(

        path.join(__dirname, '../db/db.json'),

        JSON.stringify({

            notes: reminderData

        }, null, 2)
    )
    return note;
}


function eraseReminder(reminderData, id) {

    let eraseName = parseInt(id);

    reminderData.splice(eraseName, 1);


    for (let i = eraseName; i < reminderData.length; i++) {

        reminderData[i].id = i.toString();
    }

    fs.writeFileSync(

        path.join(__dirname, '../db/db.json'),
        
        JSON.stringify({

            notes: reminderData
        }, null, 2)
    )
}


module.exports = {

    addReminder,

    eraseReminder
};