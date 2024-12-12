const express = require("express")
const app = express()
const AllRoutes = require("./src/Routes/index")

app.use(AllRoutes)

module.exports = { app }