
// These constants define the needed depencies

const fs = require("fs");


const path = require("path");

// This cool function helps us to add rad new notes to our app

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

// This handy function helps us delete old notes so the page doesn't look too crowded 

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


/* References

- https://blog.devgenius.io/learning-nodejs-by-creating-a-notes-app-9eafc4223306

- https://www.studytonight.com/post/notepad-app-using-nodejs-mongodb-and-express

*/
