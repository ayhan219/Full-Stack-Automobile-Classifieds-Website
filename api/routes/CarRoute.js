const express = require("express");
const router = express.Router();
const { createCar,getCars,getSpecificCar,getRecently } = require("../controllers/CarController");
const upload = require("../middleware/Upload");

// 'images' alanını belirtin
router.post("/", upload.array("image",10), createCar);
router.get("/recently",getRecently)
router.get("/",getCars)
router.get("/:id",getSpecificCar)


module.exports = router;
