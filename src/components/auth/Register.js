import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { RegisterAuthAction } from "../../redux/actions/AuthAction";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

const Register = (props) => {
  const { user, register } = props;
  const [userState, setUserstate] = useState({});
  const history = useHistory();
  return (
    <div>
      <Header></Header>
      <div className="sign-in-main">
        <div className="container d-flex">
          <div className="sign-in-container py-5 m-auto border">
            <div className="sign-in-header">
              <h4 className="font-weight-bold">Sign Up</h4>
              <p className="sign-in-intro">
                <span className="text-muted">New to Food Delivery App ? </span>
                <span className="text-danger font-weight-bold">Sign In</span>
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
                register(userState, history);
              }}
            >
              <div className="form-group">
                <div className="form-row">
                  <div className="col">
                    <label htmlFor="InputEmail">Name</label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      placeholder="User Name"
                      onChange={(event) => {
                        const username = event.target.value;
                        setUserstate({ ...userState, ...{ username } });
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="form-row">
                  <div className="col">
                    <label htmlFor="InputEmail">First Name</label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      placeholder="First Name"
                      onChange={(event) => {
                        const first_name = event.target.value;
                        setUserstate({ ...userState, ...{ first_name } });
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="form-row">
                  <div className="col">
                    <label htmlFor="InputEmail">Last Name</label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      placeholder="Last Name"
                      onChange={(event) => {
                        const last_name = event.target.value;
                        setUserstate({ ...userState, ...{ last_name } });
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="InputEmail">Email address</label>
                <input
                  type="email"
                  className="form-control form-control-sm"
                  onChange={(event) => {
                    const email = event.target.value;
                    setUserstate({ ...userState, ...{ email } });
                  }}
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="InputPassword1">Password</label>
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

      <Footer></Footer>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (userState, history) => {
      // dispatch()
      // console.log(userState);
      dispatch(RegisterAuthAction(userState, history));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Register);
