import React, { useEffect, useRef, useState } from "react";
import "./loginPage.css";
import { NavLink, useNavigate } from "react-router-dom";
import { FaArrowAltCircleRight, FaEyeSlash, FaEye } from "react-icons/fa";
import { useSelector,connect } from "react-redux";
import { loginApiCall } from "../../redux/authentication/authActions";
import toastNotify from "../../utils/toastNotify";

const LoginPage = ({ loginApiCall, userData, token }) => {
  const [showPassword, setShowPassword] = useState(false);
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();

  const code = useSelector((state) => state.auth);
  console.log({ code });
  // code.subscribe();

  const tooglePassword = () => {
    setShowPassword((showPassword) => !showPassword);
  };

  const loginHandler = () => {
    if (email.current.value && password.current.value) {
      loginApiCall({
        email: email.current.value,
        password: password.current.value,
      });
    }
    if (email.current.value || password.current.value) {
      toastNotify("error", "Enter all the fields");
    }
  };

  useEffect(() => {
    if (code.encodedToken) {
      navigate("/home");
    }
  }, [code.encodedToken, navigate]);

  return (
    <div className="login-main">
      <div className="login-page">
        <div className="login-container">
          <h3>Sign In</h3>
          <div className="login-element">
            <label>Email:</label>{" "}
            <input
              className="input-element"
              type="text"
              placeholder="Enter email"
              ref={email}
              required
            />
            <label>Password:</label>
            <div className="password-div">
              <input
                ref={password}
                className="input-element password-div-input"
                type={showPassword ? "text" : "password"}
                placeholder="***********"
                required
              />
              <div className="password-icon" onClick={tooglePassword}>
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </div>
            </div>
            <button className="login-btn bg-clr-primary" onClick={loginHandler}>
              Login
            </button>
            <button
              className="login-btn secondary"
              onClick={() => {
                loginApiCall({
                  email: "ankit@gmail.com",
                  password: "ankit144",
                });
              }}
            >
              Login as a Guest
            </button>
          </div>

          {/* <p>
            <a href="/root">Forgot password?</a>
          </p> */}
          <NavLink className="link" to="/signup">
            Create a new account <FaArrowAltCircleRight />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

const mapStateToProp = (state) => {
  return {
    userData: state.auth.user,
    token: state.auth.encodedToken,
  };
};

const mapDispatchToState = (dispatch) => {
  return {
    loginApiCall: (obj) => dispatch(loginApiCall(obj)),
  };
};

export default connect(mapStateToProp, mapDispatchToState)(LoginPage);
