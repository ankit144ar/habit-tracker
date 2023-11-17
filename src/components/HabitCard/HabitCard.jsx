import React from "react";
import "./habit.css";
import { useDispatch } from "react-redux";
import { complete } from "../../redux/createHabit/habitActionCreators";

const HabitCard = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="habit-container hover">
        <div className="habit-title">
          <h2>{data.name}</h2>{" "}
          {data?.completed ? <></>:(
            <div
              className="done-tick"
              onClick={(e) => {
                e.stopPropagation();
                dispatch(complete(data._id));
              }}
            >
              {" "}
              <svg
                width="24"
                height="22"
                top="1.41px"
                viewBox="0 0 24 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.4984 0.40625L9.50156 14.9047L3 8.40781L0 11.4078L9.99844 21.4062L24 3.40625L20.4984 0.40625Z"
                  fill="#60A5FA"
                />
              </svg>
            </div>
          )}
        </div>
        <div className="habit-label">
          {data?.label?.map((ele, index) => (
            <span key={index}>{ele}</span>
          ))}
          {/* <h5>label</h5>
          <h5>label</h5>
          <h5>label</h5> */}
        </div>
        <div className="habit-description">0/{data.goal} a day</div>
      </div>
    </div>
  );
};

export default HabitCard;
