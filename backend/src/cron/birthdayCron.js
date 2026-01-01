const cron = require("node-cron");
const User = require("../models/user.js");
const sendEmail = require("../config/mailer.js");

const birthdayCron = () => {
    cron.schedule( "0 7 * * *" , async() => {
        const today = new Date();
        const month = today.getMonth();
        const day = today.getDay();

        const users = await Users.find();

        for (const user of users) {
            const dob = new Date(user.dateOfBirth); 
            if (dob.getMonth === month & dob.getDate() === day ) {
                await sendEmail (
                    user.email, 
                    "Birthday Message from Devor",
                   `<h2> Happy Birthday ${user.name} </h2>
                   <p>Devor be Wishing you, joy succes and good health, You deserve the best ya know</p>`
                )
            }
        }
    })
}

module.exports = birthdayCron