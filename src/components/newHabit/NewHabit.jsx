import React from "react";
import "./newHabit.css";
import { RxCross1 } from "react-icons/rx";
import { AiFillDelete } from "react-icons/ai";
import { BiSolidArchiveIn } from "react-icons/bi";
import Button from "../button/Button";
import HabitInfo from "./HabitInfo";
import {
  archiveApi,
  closeCreateModal,
  createNewHabit,
  deleteApi,
} from "../../redux/createHabit/habitActionCreators";
import { connect, useDispatch, useSelector } from "react-redux";
import toastNotify from "../../utils/toastNotify";
import { reset } from "../../redux/newHabit/newHabitActionCreators";

const NewHabit = ({ closeModal, clickHandler, reset }) => {
  const createNew = useSelector((state) => state.new);
  const modal = useSelector((state) => state.habit);
  const dispatch = useDispatch();

  const submitHabit = () => {
    if (
      createNew.name &&
      createNew.startDate &&
      createNew.endDate &&
      createNew.label?.length !== 0
    ) {
      clickHandler({
        ...createNew,
        completed: false,
        archive: false,
        trash: false,
      });
      closeModal();
      reset();
    } else {
      toastNotify("error", "All fields are required!");
    }
  };
  return (
    <div className="modal-container">
      <div className="new-habit-container">
        <div className="new-habit-header">
          {" "}
          {modal.isEditHabit ? <h2>Edit Habit</h2> : <h2>New Habit</h2>}
          <span
            onClick={() => {
              closeModal();
              reset();
            }}
          >
            {modal.isEditHabit ? (
              <div className="edit-icons">
                <div onClick={() => dispatch(deleteApi(modal.editId))}>
                  <AiFillDelete />
                </div>
                <div onClick={() => dispatch(archiveApi(modal.editId))}>
                  <BiSolidArchiveIn />
                </div>
                <div>
                  <RxCross1 />
                </div>{" "}
              </div>
            ) : (
              <RxCross1 />
            )}
          </span>
        </div>
        <hr />
        <HabitInfo />

        {/* {modal.isEditHabit && (
          <div>
            <button className="button">delete</button>
            <button className="button">archive</button>
          </div>
        )} */}

        <div className="btn-new">
          <button className="button hover" onClick={submitHabit}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProp = (dispatch) => {
  return {
    closeModal: () => dispatch(closeCreateModal()),
    clickHandler: (obj) => dispatch(createNewHabit(obj)),
    reset: () => dispatch(reset()),
  };
};
export default connect(null, mapDispatchToProp)(NewHabit);
