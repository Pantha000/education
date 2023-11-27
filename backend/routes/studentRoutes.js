const express = require("express");
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const {
  getAllTeacher,
  getAllQuestion,
} = require("../controllers/studentControllers");

router
  .route("/get/teachers")
  .get(isAuthenticatedUser, authorizeRoles("Student"), getAllTeacher);

router
  .route("/get/questions")
  .get(isAuthenticatedUser, authorizeRoles("Student"), getAllQuestion);

module.exports = router;
