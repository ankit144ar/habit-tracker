import React from "react";
import "./profilePage.css";
import Profile from "../../components/Profile/Profile";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const ProfilePage = () => {
  return (
    <div className="label-container">
      <h2 id="profile">My Profile</h2>
      <div className="count-container">
        <Profile />
        <Profile />
        <Profile />
        <Profile />
      </div>

      <div className="quote-container">
        <h3>Quote of the day</h3>
        <div className="quote">
            <em><FaQuoteLeft /></em>
        <div className="quote-content">
            <span>It always seems impossible until it's done.</span>
            <p><b>Nelson Mandela</b></p>
        </div>
        <em><FaQuoteRight /></em>
        </div>
        

      </div>
    </div>
  );
};

export default ProfilePage;
