import React, { useEffect } from "react";
import "./sidebar.css";
import { AiOutlineHome } from "react-icons/ai";
import { MdLabelOutline } from "react-icons/md";
import { BsArchive } from "react-icons/bs";
import { BsTrash3 } from "react-icons/bs";
import { AiOutlineLogout } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CLEAR_USER } from "../../redux/authentication/authActionType";

const Sidebar = () => {
  const navigate = useNavigate();
  const { user, encodedToken } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!encodedToken) {
      console.log(encodedToken,"logout")
      navigate("/");
    }
  }, [encodedToken,navigate]);
  return (
    <div>
      <div className="nav-container">
        <div className="nav-content-container">
          <div className="nav-content" onClick={() => navigate("/home")}>
            <AiOutlineHome /> Home
          </div>
          <div className="nav-content" onClick={() => navigate("/labels")}>
            <MdLabelOutline />
            Labels
          </div>
          <div className="nav-content" onClick={() => navigate("/archive")}>
            <BsArchive />
            Archive
          </div>
          <div className="nav-content" onClick={() => navigate("/trash")}>
            <BsTrash3 />
            Trash
          </div>
        </div>
        <div className="nav-profile-container">
          <div
            className="nav-profile-info"
            onClick={() => navigate("/profile")}
          >
            <div className="nav-profile">
              <img
                src="data:image/png;base64,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"
                alt=""
                className="nav-profile-pic"
              />
              <div>
                <h4>
                  {user.firstname} {user.lastname}
                </h4>
                <span>@{user.username}</span>
              </div>
            </div>
            <div
              className="logout"
              onClick={(e) => {
                e.stopPropagation();
                sessionStorage.clear();
                dispatch({ type: CLEAR_USER });
              }}
            >
              <AiOutlineLogout />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
