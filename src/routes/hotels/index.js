const express = require("express");
const router = express.Router();
const hotelsController = require("../../controllers/Hotels");

router.use("/:slug", hotelsController.show);

router.use("/", hotelsController.index);

module.exports = router;
