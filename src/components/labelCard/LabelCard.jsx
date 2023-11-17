import React, { useState } from "react";
import "./label.css";


import { useDispatch, useSelector } from "react-redux";
import {
  closeModal,
  createLabelApi,
} from "../../redux/label/labelActionCreators";

const LabelCard = () => {
  const [labelName, setLabelName] = useState("");
  const label = useSelector((state) => state.label);
  const dispatch = useDispatch();

  return (
    <div className="label-display">
      <div className="add-label">
        <input
          type="text"
          placeholder="Enter label name"
          value={labelName}
          onChange={(e) => setLabelName(e.target.value)}
        />
        <button
          className="add-btn"
          onClick={() => {
            dispatch(closeModal());
            dispatch(createLabelApi(labelName));
          }}
        >
          Add
        </button>
        {/* <AiFillDelete fontSize="1.5rem" /> */}
      </div>
    </div>
  );
};

export default LabelCard;
