const express = require("express");
const router = express.Router();
const techController = require("../controllers/tech.controller");
const { authenticateUser } = require("../middleware/auth.middleware");

router.get("/feed", authenticateUser, techController.getTechUpdates);

router.put(
  "/preferences",
  authenticateUser,
  techController.updateTechPreferences
);

module.exports = router;
