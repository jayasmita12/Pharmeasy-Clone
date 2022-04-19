const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())

const healthcareDevicesController = require("./controllers/HealthcareDevice-controller")
app.use("/HealthcareDevices",healthcareDevicesController)

const healthFooddrinkController = require("./controllers/HealthFood-controller")
app.use("/HealthFoodandDrinks",healthFooddrinkController)

const covidController = require("./controllers/covid-controller")
app.use('/covids',covidController)

const skincareController = require("./controllers/skincare-controller")
app.use("/skincares",skincareController)

const healthcaredataController = require("./controllers/healthcare-data-controller")
app.use("/healthcaredata",healthcaredataController)

module.exports = app