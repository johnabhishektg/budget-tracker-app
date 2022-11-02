import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Expenses from "./Expenses";

const ExpensesList = () => {
  const { expenses } = useContext(AppContext);
  return (
    <div className="expenses-list">
      {expenses.map((expense) => (
        <Expenses id={expense.id} name={expense.name} cost={expense.cost} />
      ))}
    </div>
  );
};

export default ExpensesList;
