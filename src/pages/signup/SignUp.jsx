import React, { useEffect, useState } from "react";
import "./signup.css";
import { connect, useSelector } from "react-redux";
import { FaEyeSlash, FaEye, FaArrowAltCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { singupApiCall } from "../../redux/authentication/authActions";

const SignUp = ({ signupApiCall, userData, token }) => {
  const [showpassword, setShowPassword] = useState(false);
  const [signupData, setSingupData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const code = useSelector((state) => state.auth);

  const singupHandler = (e) => {
    e.preventDefault();
    signupApiCall({ ...signupData });
  };

  useEffect(() => {
    if (code.encodedToken) {
      navigate("/home");
    }
  }, [code.encodedToken, navigate]);

  return (
    <div className="signup-main">
      <div className="signup-container">
        <h2 className="center">Sign Up</h2>
        <form onSubmit={singupHandler}>
          <div className="signup-content">
            <label htmlFor="">First Name:</label>
            <input
              value={signupData.firstname}
              type="text"
              placeholder="Manovita"
              onChange={(e) =>
                setSingupData({ ...signupData, firstname: e.target.value })
              }
              required
            />
          </div>
          <div className="signup-content">
            <label htmlFor="">Last Name:</label>
            <input
              value={signupData.lastname}
              type="text"
              placeholder="Singh"
              onChange={(e) =>
                setSingupData({ ...signupData, lastname: e.target.value })
              }
              required
            />
          </div>
          <div className="signup-content">
            <label htmlFor="">Username:</label>
            <input
              value={signupData.username}
              type="text"
              placeholder="manovita@123"
              onChange={(e) =>
                setSingupData({ ...signupData, username: e.target.value })
              }
              required
            />
          </div>
          <div className="signup-content">
            <label htmlFor="">Password:</label>
            <div className="input-password">
              <input
                value={signupData.password}
                type={showpassword ? "text" : "password"}
                placeholder="**********"
                onChange={(e) =>
                  setSingupData({ ...signupData, password: e.target.value })
                }
                required
              />

              <em onClick={() => setShowPassword(!showpassword)}>
                {" "}
                {showpassword ? <FaEye /> : <FaEyeSlash />}
              </em>
            </div>
          </div>
          <div className="signup-btn-align">
            <button className="login-btn padding-1" type="submit">
              Sign up
            </button>
          </div>

          <div className="signup-nav" onClick={() => navigate("/login")}>
            Already have an account?
            <FaArrowAltCircleRight />
          </div>
        </form>
      </div>
    </div>
  );
};

const mapSateToProp = (state) => {
  console.log(state, "signup");
  return {
    userData: state.auth.user,
    token: state.auth.encodedToken,
  };
};

const mapDispatchToProp = (dispatch) => {
  return {
    signupApiCall: (obj) => dispatch(singupApiCall(obj)),
  };
};
export default connect(mapSateToProp, mapDispatchToProp)(SignUp);
