const { application } = require("express");
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const middleware = require("../middleware/auth");

router.post("/users", userController.createUser);

router.post("/login", middleware, userController.loginUser);

router.get("/users/:userId", middleware, userController.getUserData);

router.put("/users/:userId", userController.updateUser);

router.delete("/users/:userId", userController.deleteUser);

module.exports = router;
