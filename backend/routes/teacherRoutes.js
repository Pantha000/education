const express = require("express");
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const { createStatus } = require("../controllers/teacherControllers");

router
  .route("/create/status")
  .post(isAuthenticatedUser, authorizeRoles("Teacher"), createStatus);

module.exports = router;
