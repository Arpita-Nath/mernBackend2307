const express = require("express")
const { Router } = express

const _ = Router()

_.route('/user').get((req, res) => {
    console.log("hi");
})


module.exports = _; 