import React from "react";
import "./button.css";
import { connect, useSelector } from "react-redux";
import {
  closeCreateModal,
  createNewHabit,
} from "../../redux/createHabit/habitActionCreators";

const Button = ({ text, clickHandler, closeModal }) => {
  const createNew = useSelector((state) => state.new);
  return (
    <div>
      <button
        className="button hover"
        onClick={() => {
          clickHandler({
            ...createNew,
            completed: false,
            archive: false,
            trash: false,
          });
          closeModal();
        }}
      >
        {text}
      </button>
    </div>
  );
};

const mapDispatchToProp = (dispatch) => {
  return {
    clickHandler: (obj) => dispatch(createNewHabit(obj)),
    closeModal: () => dispatch(closeCreateModal()),
  };
};
export default connect(null, mapDispatchToProp)(Button);
