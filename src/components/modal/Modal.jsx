import React from "react";
import "./Modal.css";
import LabelCard from "../labelCard/LabelCard";
import { RxCross1 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { closeModal } from "../../redux/label/labelActionCreators";

const Modal = () => {
    const dispatch = useDispatch()
  return (
    <div className="modalContainer">
        <div className="new-habit-container">
      <div className="new-habit-header">
        <h2>Add new label</h2>{" "}
        <span onClick={()=>dispatch(closeModal())}>
          <RxCross1 />
        </span>
      </div>
      <LabelCard />
      </div>
    </div>
  );
};

export default Modal;
