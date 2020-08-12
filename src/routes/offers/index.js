const express = require("express");
const router = express.Router();
const offersController = require("../../app/controllers/Offers");

router.use("/:slug", offersController.show);

router.use("/", offersController.index);

module.exports = router;
