import React, { useState } from "react";

const EditBudget = (props) => {
  const [editedBudget, setEditedBudget] = useState(props.budget);

  return (
    <div className="disp-1">
      <input
        required="required"
        onChange={(e) => {
          setEditedBudget(e.target.value);
        }}
        value={editedBudget}
        className="editbudg"
        type="number"
      />
      <button
        type="submit"
        onClick={() => {
          props.handleSave(editedBudget);
        }}
      >
        save
      </button>
    </div>
  );
};

export default EditBudget;
