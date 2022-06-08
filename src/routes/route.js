const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController");
const { path } = require('express/lib/application');

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/getBookData",BookController.getBookData)
router.post("/newBookData",BookController.newBookData)
router.post("/getBookInYear",BookController.getBookInYear)
router.post("/getParticularBooks",BookController.getParticularBooks)
router.post("/getXINRBook",BookController.getXINRBook)
router.post("/getRandomBooks",BookController.getRandomBooks)

module.exports = router;