import axios from "axios";
import { AuthActionType } from "../actions/AuthAction";

const authState = {
  isLoggedIn: false,
  user: {
    username: "",
    first_name: "",
    last_name: "",
    email: "",
  },
  token: "",
};

const getAuthState = () => {
  const auth = localStorage.getItem("auth");

  try {
    const authobj = JSON.parse(auth);
    const { user } = authobj;
    // const { expires_at, jwttoken } = authobj.user;
    // if (new Date(expires_at) > new Date()) {
    //   axios.defaults.headers.common["Authorization"] = `Bearer ${jwttoken}`;
    //   return authobj;
    // }
    if (user.token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
      console.log(authobj);
      return authobj;
    }
    return authState;
  } catch (error) {
    return authState;
  }
};
// console.log(getAuthState());
const newAUth = getAuthState();

export const authReducer = (state = newAUth, action) => {
  switch (action.type) {
    case AuthActionType.REGISTER_SUCCESS:
      return {
        isLoggedIn: false,
      };
    case AuthActionType.LOGIN_SUCESS:
      const newAuthState = {
        isLoggedIn: true,
        user: action.payload,
      };
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${action.payload.token}`;
      localStorage.setItem("auth", JSON.stringify(newAuthState));
      return newAuthState;
    case AuthActionType.LOGOUT_SUCESS:
      return localStorage.removeItem("auth");
    case AuthActionType.LOGOUT_FAIL:
      return localStorage.removeItem("auth");
    default:
      return state;
  }
};

export default authReducer;
