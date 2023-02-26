import axios from "axios";

export const AuthActionType = {
  REGISTER_SUCCESS: "REGISTER_SUCCESS",
  REGISTER_FAIL: "REGISTER_FAIL",
  LOGIN_SUCESS: "LOGIN_SUCESS",
  LOGIN_FAIL: "LOGIN_FAIL",
  LOGOUT_SUCESS: "LOGOUT_SUCESS",
  LOGOUT_FAIL: "LOGOUT_FAIL",
};

export const RegisterAuthAction = (userState, history) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("/auth/register", userState);
      const { data } = res;
      dispatch({ type: AuthActionType.REGISTER_SUCCESS, payload: data });
      history.push("/login");
    } catch (error) {
      if (error.response) {
        // console.log(error.response.data);
        dispatch({
          type: AuthActionType.REGISTER_FAIL,
          payload: error.response.data,
        });
      }
    }
  };
};

export const LoginAuthAction = (userState, history) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("/auth/login", userState);
      const { data } = res;
      dispatch({ type: AuthActionType.LOGIN_SUCESS, payload: data });
      history.push("/");
    } catch (error) {
      if (error.response) {
        // console.log(error.response.data);
        dispatch({
          type: AuthActionType.LOGIN_FAIL,
          payload: error.response.data,
        });
      }
    }
  };
};

export const LogOutAuthAction = (history) => {
  return async (dispatch) => {
    try {
      dispatch({ type: AuthActionType.LOGOUT_SUCESS, payload: {} });
      history.push("/login");
    } catch (error) {
      console.log("error", error);
      dispatch({ type: AuthActionType.LOGOUT_FAIL, payload: {} });
      history.push("/login");
    }
  };
};
