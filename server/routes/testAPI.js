var express = require("express");

var router = express.Router();
router.get("/", function(req, res, next) {
    res.send("API is working properly");
});

router.get("/say", function (req, res, next) {
    const resData = {
        message: "Hello world"
    }
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(resData));
});
module.exports = router;