const { Router } = require("express");

const authController = require("../controllers/authController");
const router = Router();
const cors = require("cors");

router.post("/signup", cors(), authController.signup);
router.post("/signin", authController.signin);

module.exports = router;
