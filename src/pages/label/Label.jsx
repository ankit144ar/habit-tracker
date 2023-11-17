import React from "react";
import SearchBar from "../../components/searchbar/SearchBar";
import "./label.css";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  createModalOpen,
  deleteLabelApi,
} from "../../redux/label/labelActionCreators";

const Label = () => {
  const dispatch = useDispatch();
  const label = useSelector((state) => state.label);
  return (
    <div className="label-container">
    
        <div className="label-padding">
          <h2>Labels</h2>{" "}
          <h3 onClick={() => dispatch(createModalOpen())}>+Create Label</h3>
        </div>
        <div className="list">
          {label.labels.map((ele) => (
            <div className="show-label" key={ele}>
              <h4>{ele}</h4>{" "}
              <span
                className="hover"
                onClick={() => dispatch(deleteLabelApi(ele))}
              >
                <AiFillDelete />
              </span>
            </div>
          ))}
        </div>
      </div>
 
  );
};

export default Label;
