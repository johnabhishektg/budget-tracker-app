import React, { useContext } from "react";
import { useState } from "react";
import { AppContext } from "../context/AppContext";
import Budget from "./budget/Budget";
import EditBudget from "./budget/EditBudget";

const Header = () => {
  const { expenses, budget, dispatch } = useContext(AppContext);

  const [isEditing, setIsEditing] = useState(false);

  const totalExpense = expenses.reduce((total, value) => {
    return (total += value.cost);
  }, 0);

  const alertBudget = totalExpense > budget ? "disp-2 alert" : "disp-2";

  const handleClick = () => {
    setIsEditing(true);
    console.log("bruh");
  };

  const handleSave = (value) => {
    setIsEditing(false);
    console.log(value);

    dispatch({
      type: "SET_EXPENSE",
      payload: value,
    });
  };

  return (
    <div className="header">
      <h2 className="title">My Budget Planner</h2>
      <div className="header-disp">
        {isEditing ? (
          <EditBudget handleSave={handleSave} budget={budget} />
        ) : (
          <Budget handleClick={handleClick} budget={budget} />
        )}
        <div className={`${alertBudget}`}>
          Remaning: ₹{budget - totalExpense}
        </div>
        <div className="disp-3">Spent so far: ₹{totalExpense}</div>
      </div>
    </div>
  );
};

export default Header;
