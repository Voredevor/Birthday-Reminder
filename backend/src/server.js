require("dotenv").config();
const app = require("./app.js")
const connectDB = require("./config/db.js")
const birthdayCron = require("./cron/birthdayCron.js")

const PORT = process.env.PORT || 5000

connectDB();
birthdayCron();

app.listen(PORT, () => {
    console.log( `Server is running on PORT ${PORT}`);
}) 