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
  createRoutine,
  getRoutines,
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

router
  .route("/create/routine")
  .post(isAuthenticatedUser, authorizeRoles("Admin"), createRoutine);

router.route("/all/teacher").get(getTeachers);
router.route("/all/student").get(getStudents);
router.route("/all/routine").get(getRoutines);

module.exports = router;
