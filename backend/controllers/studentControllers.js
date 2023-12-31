const catchAsyncError = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/errorhandler");
const ApiFetaures = require("../utils/apifetures");

const Teacher = require("../models/teacherModel");
const Question = require("../models/questionModel");
const Routine = require("../models/routineModel");

/* ===================================================
       All Teachers (/api/v1/get/teachers) (req : get)
   =================================================== */
exports.getAllTeacher = catchAsyncError(async (req, res, next) => {
  const apifeatures = new ApiFetaures(Teacher.find(), req.query)
    .search(req.body.option)
    .filter();
  const teachers = await apifeatures.query;

  res.status(200).json({
    success: true,
    teachers,
  });
});

/* ===================================================
       All Questions (/api/v1/get/questions) (req : get)
   =================================================== */
exports.getAllQuestion = catchAsyncError(async (req, res, next) => {
  const apifeatures = new ApiFetaures(
    Question.find().sort({ createdAt: -1 }),
    req.query
  )
    .searchCode()
    .filter();
  const questions = await apifeatures.query;

  res.status(200).json({
    success: true,
    questions,
  });
});

/* ===================================================
       All Routine (/api/v1/get/routines) (req : get)
   =================================================== */
exports.getAllRoutine = catchAsyncError(async (req, res, next) => {
  const apifeatures = new ApiFetaures(
    Routine.find().populate({ path: "teacher" }).sort({ createdAt: -1 }),
    req.query
  ).filter();
  const routines = await apifeatures.query;

  res.status(200).json({
    success: true,
    routines,
  });
});
