import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { nanoid } from "nanoid";

const AddExpense = () => {
  const { dispatch } = useContext(AppContext);

  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const expense = {
      id: nanoid(),
      name,
      cost: parseInt(cost),
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });

    setName("");
    setCost("");
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="add-exp">
        <h2>Add Expense</h2>
        <div className="exp-form">
          <div className="name">
            <p>Name</p>
            <input
              required="required"
              type="text"
              id="name"
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
              id="cost"
              value={cost}
              onChange={(e) => {
                setCost(e.target.value);
              }}
            />
          </div>
        </div>
        <button type="submit">Save</button>
      </div>
    </form>
  );
};

export default AddExpense;
