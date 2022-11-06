import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import Expenses from "./Expenses";

const ExpensesList = () => {
  const { expenses } = useContext(AppContext);

  const [searchField, setSearchField] = useState("");

  const filterSearch = expenses.filter((expense) =>
    expense.name.toLowerCase().includes(searchField)
  );

  function handleChange(e) {
    setSearchField(e.target.value);
  }

  return (
    <div className="exp">
      <div className="search">
        <h2>Expenses</h2>
        <input
          onChange={handleChange}
          value={searchField}
          type="text"
          placeholder="Type to search.."
        />
      </div>
      <div className="expenses-list">
        {filterSearch.map((expense) => (
          <Expenses id={expense.id} name={expense.name} cost={expense.cost} />
        ))}
      </div>
    </div>
  );
};

export default ExpensesList;
