var express = require("express");

var router = express.Router();
router.get("/", function(req, res, next) {
    res.send("API is working properly");
});

router.get("/say", function (req, res, next) {
    res.send("Hello world!");
});
module.exports = router;