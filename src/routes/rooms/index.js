const express = require("express");
const router = express.Router();
const roomsController = require("../../app/controllers/Rooms");

router.use("/:slug", roomsController.show);

router.use("/", roomsController.index);

module.exports = router;
