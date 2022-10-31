import { useState } from "react";

const AddExpense = ({ handleCostExp }) => {
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  function handleClick() {
    setName("");
    setCost("");
  }

  return (
    <div className="add-exp">
      <h2>Add Expense</h2>
      <div className="exp-form">
        <div className="name">
          <p>Name</p>
          <input
            required="required"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="cost">
          <p>Cost</p>
          <input
            required="required"
            type="number"
            value={cost}
            onChange={(e) => {
              setCost(e.target.value);
            }}
          />
        </div>
      </div>
      <button type="submit" onClick={handleClick}>
        Save
      </button>
    </div>
  );
};

export default AddExpense;
