import React from "react";
import "./home.css";
import { connect, useSelector } from "react-redux";
import CountCard from "../../components/countCard/CountCard";
import HabitCard from "../../components/HabitCard/HabitCard";
import {
  addId,
  clearEditId,
  closeEditModal,
  isCreateNewabit,
  isEditModal,
} from "../../redux/createHabit/habitActionCreators";
import { setEditData } from "../../redux/newHabit/newHabitActionCreators";

const Home = ({
  openModal,
  openEditModal,
  callEditApi,
  setEditId,
  clearEditId,
}) => {
  const { habit } = useSelector((state) => state.habit);
  const { user } = useSelector((state) => state.auth);
  const {labels} = useSelector((state)=> state.label )
  const habitCompleted = habit?.filter(({ completed }) => completed);
  const countProgress = habit?.filter(({ completed }) => !completed);
  const time = new Date();
  const overdueTaks = habit?.filter(
    ({ endDate, completed }) =>
      new Date(endDate).getTime() < time.getTime() &&
      new Date(endDate).getTime() !== time.getTime() &&
      completed
  );

  console.log(labels);
  return (
    <div className="home-container">
      <div className="home">
        <div className="home-heading">
          <h1 id="welcome-text">
            Welcome, {user.firstname[0].toUpperCase() + user.firstname.slice(1)}
            !
          </h1>
          <h3>Today</h3>
        </div>
        <div className="count-container">
          <CountCard text={"Completed"} data={habitCompleted.length} />
          <CountCard text={"In Progress"} data={countProgress.length} />
          <CountCard text={"Overdue"} data={overdueTaks.length} />
          <CountCard text={"Total"} data={habit.length} />
        </div>
        <div>
          <div className="home-heading">
            <h2>My Habits</h2>
            <h3
              className="hover"
              onClick={() => {
                openModal();
                clearEditId();
              }}
            >
              +Create Habit
            </h3>
          </div>
          {countProgress.length === 0 && labels.length === 0 ? (
            <h3 className="notify">
              Create labels and get started to track the habits!
            </h3>
          ) : (
            <>
              <p>
                <b>ACTIVE</b>
              </p>
              <div className="count-container">
                {countProgress.length === 0 ? <div> Create a new Habit</div> : countProgress.map((data) => (
                  <div
                    key={data._id}
                    onClick={() => {
                      openEditModal();
                      callEditApi(data._id);
                      setEditId(data._id);
                      console.log(data._id);
                    }}
                  >
                    {" "}
                    <HabitCard key={data._id} data={data} />{" "}
                  </div>
                ))}
              </div>
              <p>
                <b>COMPLETED</b>
              </p>
              <div className="count-container">
                {habitCompleted.length === 0 ? <div>Not any!</div> : habitCompleted?.map((data) => (
                  <HabitCard key={data._id} data={data} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProp = (state) => {
  console.log(state.habit);
  return {
    ismodal: state.habit.isCreateNewabit,
  };
};

const mapDispatchToProp = (dispatch) => {
  return {
    openModal: () => dispatch(isCreateNewabit()),
    openEditModal: () => dispatch(isEditModal()),
    closeEditModal: () => dispatch(closeEditModal()),
    callEditApi: (id) => dispatch(setEditData(id)),
    setEditId: (id) => dispatch(addId(id)),
    clearEditId: () => dispatch(clearEditId()),
  };
};
export default connect(mapStateToProp, mapDispatchToProp)(Home);
