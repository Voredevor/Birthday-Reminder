const cors = require("cors")
const express = require("express")
const userRoutes = require("./routes/user.routes.js")

const app = express();

app.use(cors());
app.use(express.json())

app.use("/api/users", userRoutes);

module.exports = app