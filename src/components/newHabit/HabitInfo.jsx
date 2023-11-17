import React, { useState } from "react";
import { useSelector, connect } from "react-redux";
import {
  addEndDate,
  addGoal,
  addLabel,
  addName,
  addRepeat,
  addStartDate,
} from "../../redux/newHabit/newHabitActionCreators";
import { useEffect } from "react";
import axios from "axios";

const HabitInfo = ({
  addName,
  addStart,
  addEnd,
  addGoal,
  addRepeat,
  addLabel,
  name,
  startDate,
  endDate,
  goal,
  repeat,
  label,
}) => {
  const [labelList, setLabelList] = useState([]);
  const data = useSelector((state) => state.auth);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("/api/labels", {
          headers: {
            authorization: data.encodedToken,
          },
        });
        setLabelList(res.data.labels);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [data.encodedToken]);

  return (
    <div className="new-habit-body">
      <p className="label">Name</p>
      <input
        type="text"
        placeholder="Enter name of your habit"
        className="input"
        value={name}
        onChange={(e) => addName(e.target.value)}
      />
      <p className="label">Start Date:</p>
      <input
        type="date"
        className="input"
        value={startDate}
        onChange={(e) => addStart(e.target.value)}
      />
      <p className="label">End Date:</p>
      <input
        type="date"
        className="input"
        value={endDate}
        onChange={(e) => addEnd(e.target.value)}
      />
      <p className="label">Goal:</p>
      <select value={goal} onChange={(e) => addGoal(e.target.value)}>
        <option value="none" disabled hidden>
          Select an option
        </option>
        <option value="1 times">1 times</option>
        <option value="2 times">2 times</option>
      </select>
      <p className="label">Repeat:</p>
      <select value={repeat} onChange={(e) => addRepeat(e.target.value)}>
        <option value="none" disabled hidden>
          Select an option
        </option>
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
      </select>
      <p className="label">Select Labels</p>
      {labelList.length !==0 ? (
        labelList.map((ele, index) => (
          <div key={index} className="display-flex">
            <input
              type="checkbox"
              value={ele}
              onClick={(e) => addLabel(e.target)}
              checked={label?.find((item) => ele === item)}
            />
            <span>{ele}</span>
          </div>
        ))
      ) : (
        <h4>Create label to select</h4>
      )}
    </div>
  );
};

const mapStateToProp = (state) => {
  return {
    name: state.new.name,
    startDate: state.new.startDate,
    endDate: state.new.endDate,
    goal: state.new.goal,
    repeat: state.new.repeat,
    label: state.new.label,
  };
};
const mapDispatchToProp = (dispatch) => {
  return {
    addName: (data) => dispatch(addName(data)),
    addStart: (data) => dispatch(addStartDate(data)),
    addEnd: (data) => dispatch(addEndDate(data)),
    addGoal: (data) => dispatch(addGoal(data)),
    addRepeat: (data) => dispatch(addRepeat(data)),
    addLabel: (data) => dispatch(addLabel(data)),
  };
};
export default connect(mapStateToProp, mapDispatchToProp)(HabitInfo);
