const { Router } = require('express');

const countries = require("./countries.js");
const activities = require("./activities.js");
const filters = require("./filters.js")
const router = Router();


router.use("/countries", countries)
router.use("/activities", activities)
router.use("/filters", filters)

module.exports = router;
