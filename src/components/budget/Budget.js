const Budget = (props) => {
  return (
    <>
      <div className="disp-1">
        <p>Budget: ₹{props.budget}</p>
        <button
          onClick={() => {
            props.handleClick();
          }}
          type="submit"
        >
          edit
        </button>
      </div>
    </>
  );
};

export default Budget;
