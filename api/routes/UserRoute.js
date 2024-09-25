const express = require("express");
const router = express.Router();
const {signupUser,loginUser,getCurrent,logoutUser} = require("../controllers/UserController")
const authMiddleware = require("../middleware/AuthMiddleware")



router.post("/signup",signupUser)
router.post("/login",loginUser)
router.get("/getcurrent",authMiddleware,getCurrent)
router.post("/logout",logoutUser)

module.exports = router;