const Expenses = (props) => {
  return (
    <div className="expense">
      <div className="exp-left">
        <p>{props.name}</p>
      </div>
      <div className="exp-right">
        <p>₹{props.cost}</p>
        <i class="fas fa-times-circle"></i>
      </div>
    </div>
  );
};

export default Expenses;
