import axios from "axios";

export const getTeachers = () => async (dispatch) => {
  try {
    dispatch({ type: "GetStudentTeacherRequest" });

    const { data } = await axios.get("/api/v1/get/teachers");
    dispatch({ type: "GetStudentTeacherSuccess", payload: data.teachers });
  } catch (err) {
    dispatch({
      type: "GetStudentTeacherFail",
      payload: err.response.data.message,
    });
  }
};

//Clearing Errors
export const clearError = () => async (dispatch) => {
  dispatch({ type: "ClearErrors" });
};

//Clearing
export const clearSuccess = () => async (dispatch) => {
  dispatch({ type: "ClearSuccess" });
};
