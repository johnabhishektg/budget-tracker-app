import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Header = () => {
  const { expenses, budget } = useContext(AppContext);

  const totalExpense = expenses.reduce((total, value) => {
    return (total += value.cost);
  }, 0);

  return (
    <div className="header">
      <h2 className="title">My Budget Planner</h2>
      <div className="header-disp">
        <div className="disp-1">
          <p>Budget: ₹{budget}</p>
          <button type="submit">edit</button>
        </div>
        <div className="disp-2">Remaning: ₹{budget - totalExpense}</div>
        <div className="disp-3">Spent so far: ₹{totalExpense}</div>
      </div>
    </div>
  );
};

export default Header;
