import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Header = () => {
  const { budget } = useContext(AppContext);

  return (
    <div className="header">
      <h2 className="title">My Budget Planner</h2>
      <div className="header-disp">
        <div className="disp-1">
          <p>Budget: ₹{budget}</p>
          <button type="submit">edit</button>
        </div>
        <div className="disp-2">Remaning:</div>
        <div className="disp-3">Spent so far:</div>
      </div>
    </div>
  );
};

export default Header;
