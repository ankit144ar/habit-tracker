import React, { useEffect } from "react";
import "./landing.css";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const LandingPage = () => {
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth);

  //
  useEffect(() => {
    console.log(token)
    if (sessionStorage.getItem("token")) {
      navigate("/home");
    }
  }, [navigate, token]);

  return (
    <div className="landing-main">
      <div className="landing-container">
        <div className="landing-content">
          <h1>
            <span className="primary">My</span>Habit
          </h1>
          <div>
            <h2>Meet your modern</h2>
            <h2 className="primary">Habit Tracker App</h2>
            <p>
              Manage your daily tasks and workflow in a modeern way and boost
              your efficiency without efforts.
            </p>
          </div>
          <div onClick={() => navigate("/login")}>
            <Button text={"Join Now"} />
            <p className="primary">Already have an account?</p>
          </div>
        </div>

        <div className="image-container">
          <img
            id="landing-img"
            src="https://res.cloudinary.com/dgoldjr3g/image/upload/v1689063164/NegProjects/HabitTracker/undraw_activity_tracker_re_2lvv_hqgpwg.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
