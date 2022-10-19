


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


function eraseReminder(reminderData, id) {

    let deleteID = parseInt(id);
    reminderData.splice(deleteID, 1);

    for (let i = deleteID; i < reminderData.length; i++) {
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