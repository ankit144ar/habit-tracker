import React from "react";
import HabitCard from "../../components/HabitCard/HabitCard";
import SearchBar from "../../components/searchbar/SearchBar";
import { useSelector } from "react-redux";

const Trash = () => {
  const state = useSelector((state) => state.habit);
  return (
    <div className="label-container">
      <h2 className="padding-1">Trash</h2>
      <div className="count-container">
        {state.trash.length === 0 ? (
          <h3>Trash is empty!</h3>
        ) : (
          state.trash.map((data) => <HabitCard key={data._id} data={data} />)
        )}
      </div>
    </div>
  );
};

export default Trash;
