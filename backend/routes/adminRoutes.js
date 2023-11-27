const express = require("express");
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const {
  registerAdmin,
  registerStudent,
  registerTeacher,
  createQuestion,
  getTeachers,
  getStudents,
} = require("../controllers/adminControllers");

//Routes
router.route("/register/admin").post(registerAdmin);
router
  .route("/register/student")
  .post(isAuthenticatedUser, authorizeRoles("Admin"), registerStudent);

router
  .route("/register/teacher")
  .post(isAuthenticatedUser, authorizeRoles("Admin"), registerTeacher);

router
  .route("/create/question")
  .post(isAuthenticatedUser, authorizeRoles("Admin"), createQuestion);

router.route("/all/teacher").get(getTeachers);
router.route("/all/student").get(getStudents);

module.exports = router;
