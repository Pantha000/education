const cloudinary = require("cloudinary");
const catchAsyncError = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/errorhandler");

const Admin = require("../models/adminModel");
const Student = require("../models/studentModel");
const Teacher = require("../models/teacherModel");
const Question = require("../models/questionModel");

/* =============================================================
        Register Admin (/api/v1/register/admin) (req : POST)
   ============================================================= */
exports.registerAdmin = catchAsyncError(async (req, res, next) => {
  const { userName, password, name } = req.body;
  const nameUser = await Admin.findOne({ userName });
  if (nameUser) {
    return next(new ErrorHandler("This Admin already exist.", 400));
  }
  await Admin.create({ userName, password, name });
  res.status(200).json({
    success: true,
    message: "Admin Register Successfully",
  });
});
/* ==================================================================
        Register Student (/api/v1/register/student) (req : POST)
   ================================================================== */
exports.registerStudent = catchAsyncError(async (req, res, next) => {
  const { id, password, name, email, dept } = req.body;
  const studentId = await Student.findOne({ id });
  if (studentId) {
    return next(new ErrorHandler("This Student already exist.", 400));
  }
  await Student.create({ id, password, name, email, dept });
  res.status(200).json({
    success: true,
    message: "Student Register Successfully",
  });
});
/* ==============================================================
      All Student (/api/v1/all/student) (req : GET)
   ============================================================== */
exports.getStudents = catchAsyncError(async (req, res, next) => {
  const students = await Student.find();

  res.status(200).json({
    success: true,
    students,
  });
});

/* ==============================================================
      Register Teacher (/api/v1/register/teacher) (req : POST)
   ============================================================== */
exports.registerTeacher = catchAsyncError(async (req, res, next) => {
  const { id, password, name, email, dept } = req.body;
  const teacherId = await Teacher.findOne({ id });
  if (teacherId) {
    return next(new ErrorHandler("This Teacher already exist.", 400));
  }
  await Teacher.create({ id, password, name, email, dept });
  res.status(200).json({
    success: true,
    message: "Teacher Register Successfully",
  });
});

/* ==============================================================
      All Teacher (/api/v1/all/teacher) (req : GET)
   ============================================================== */
exports.getTeachers = catchAsyncError(async (req, res, next) => {
  const teachers = await Teacher.find();

  res.status(200).json({
    success: true,
    teachers,
  });
});

/* ==============================================================
      Create Question (/api/v1/create/question) (req : POST)
   ============================================================== */
exports.createQuestion = catchAsyncError(async (req, res, next) => {
  const { code, title, image, dept, semester } = req.body;

  if (!code | !title | !dept | !semester) {
    return next(new ErrorHandler("All field are required!", 400));
  }

  // const result = await cloudinary.uploader.upload(image, {
  //   folder: "post",
  //   height: 600,
  //   width: 650,
  // });

  await Question.create({
    code,
    title,
    dept,
    semester,
  });

  res.status(200).json({
    success: true,
    message: "Question Create Successfully",
  });
});