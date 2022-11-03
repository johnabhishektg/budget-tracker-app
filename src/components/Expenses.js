import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Expenses = (props) => {
  const { dispatch } = useContext(AppContext);

  const handleDelete = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
    console.log("bruh");
  };

  return (
    <div className="expense">
      <div className="exp-left">
        <p>{props.name}</p>
      </div>
      <div className="exp-right">
        <p>₹{props.cost}</p>
        <i onClick={handleDelete} className="fas fa-times-circle"></i>
      </div>
    </div>
  );
};

export default Expenses;
