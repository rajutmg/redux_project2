import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { LoginAuthAction } from "../../redux/actions/AuthAction";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
const Login = (props) => {
  const { login } = props;
  const history = useHistory();
  const [userState, setUserstate] = useState({});
  return (
    <div>
      <Header />
      <div className="sign-in-main">
        <div className="container d-flex">
          <div className="sign-in-container py-5 m-auto border">
            <div className="sign-in-header">
              <h4 className="font-weight-bold">Login</h4>
              <p className="sign-in-intro">
                <span className="text-muted">New to Food Delivery App ? </span>
                <span className="text-danger font-weight-bold">Sign Up</span>
              </p>
              <div className="login-social-media py-3">
                <button className="btn btn-primary btn-block btn-sm">
                  Continue with Google
                </button>
              </div>
            </div>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                // console.log(userState);
                // console.log(user);
                login(userState, history);
              }}
            >
              <div className="form-group">
                <label for="InputEmail">User Name</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  onChange={(event) => {
                    const username = event.target.value;
                    setUserstate({ ...userState, ...{ username } });
                  }}
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label for="InputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control form-control-sm"
                  onChange={(event) => {
                    const password = event.target.value;
                    setUserstate({ ...userState, ...{ password } });
                  }}
                />
              </div>
              <button type="submit" className="btn btn-danger btn-sm">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (userState, history) => {
      // dispatch()
      console.log(userState);
      dispatch(LoginAuthAction(userState, history));
    },
  };
};
export default connect(null, mapDispatchToProps)(Login);
