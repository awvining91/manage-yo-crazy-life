


const fs = require("fs");


const path = require("path");


function addReminder(data, reminderData) {

    const task = data;
    reminderData.push(task);

    fs.writeFileSync(

        path.join(__dirname, '../db/db.json'),

        JSON.stringify({

            notes: reminderData
        }, null, 2)
    )
    return task;
}


function eraseReminder(reminderData, name) {

    let eraseName = parseInt(name);
    reminderData.splice(eraseName, 1);

    for (let i = eraseName; i < reminderData.length; i++) {
        reminderData[i].name = i.toString();
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