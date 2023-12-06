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

export const getQuestions = (keyword, category) => async (dispatch) => {
  try {
    dispatch({ type: "GetStudentQuestionRequest" });

    let link = `/api/v1/get/questions?keyword=${keyword}`;

    if (category) {
      link = `/api/v1/get/questions?keyword=${keyword}&semester=${category}`;
    }
    const { data } = await axios.get(link);
    dispatch({ type: "GetStudentQuestionSuccess", payload: data.questions });
  } catch (err) {
    dispatch({
      type: "GetStudentQuestionFail",
      payload: err.response.data.message,
    });
  }
};

export const getRoutines = (section, dept) => async (dispatch) => {
  try {
    dispatch({ type: "GetStudentRoutineRequest" });

    const { data } = await axios.get(
      `/api/v1/get/routines?section=${section}&dept=${dept}`
    );
    dispatch({ type: "GetStudentRoutineSuccess", payload: data.routines });
  } catch (err) {
    dispatch({
      type: "GetStudentRoutineFail",
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
