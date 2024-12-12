const express = require("express")
const _ = express.Router()

const userApiRoutes = require('./Api/User.apiRoutes');

_.use("/api/v1", userApiRoutes)

_.use("*", (req, res) => {
    res.send("Route is invalid")
})

module.exports = _;  