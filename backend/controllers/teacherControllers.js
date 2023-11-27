const catchAsyncError = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/errorhandler");

const Status = require("../models/statusModel");
const Teacher = require("../models/teacherModel");

/* ===================================================
        Create Status (/api/v1/create/status) (req : POST)
   =================================================== */
exports.createStatus = catchAsyncError(async (req, res, next) => {
  const { comment } = req.body;
  if (!comment) {
    return next(new ErrorHandler("Please enter your comment", 400));
  }

  const data = {
    owner: req.user._id,
    comment: comment,
  };
  const status = await Status.create(data);

  const teacher = await Teacher.findById(req.user._id);
  teacher.status.push(status._id);
  await teacher.save();

  res.status(200).json({
    success: true,
    message: "Successfully Created Status",
  });
});
