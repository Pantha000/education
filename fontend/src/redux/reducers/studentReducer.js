import { createReducer } from "@reduxjs/toolkit";
const initialState = {};

export const studentTeacherReducer = createReducer(initialState, {
  GetStudentTeacherRequest: (state) => {
    state.loading = true;
  },
  GetStudentTeacherSuccess: (state, action) => {
    state.loading = false;
    state.teachers = action.payload;
  },
  GetStudentTeacherFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  GetStudentQuestionRequest: (state) => {
    state.loading = true;
  },
  GetStudentQuestionSuccess: (state, action) => {
    state.loading = false;
    state.questions = action.payload;
  },
  GetStudentQuestionFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  ClearErrors: (state) => {
    state.error = null;
  },
  ClearSuccess: (state) => {
    state.success = null;
  },
});
