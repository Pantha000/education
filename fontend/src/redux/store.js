import { configureStore } from "@reduxjs/toolkit";
import { forgotPasswordReducer, userReducer } from "./reducers/userReducer";
import {
  adminStudentReducer,
  adminTeacherReducer,
  createAdminReducer,
} from "./reducers/adminReducer";
import { studentTeacherReducer } from "./reducers/studentReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    forgotPassword: forgotPasswordReducer,
    createAdmin: createAdminReducer,
    teacher: adminTeacherReducer,
    student: adminStudentReducer,
    getStudentTeacher: studentTeacherReducer,
  },
});

export default store;
