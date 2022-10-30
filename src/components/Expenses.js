const Expenses = ({ id, name, cost }) => {
  return (
    <div className="expense">
      <div className="exp-left">
        <p>{name}</p>
      </div>
      <div className="exp-right">
        <p>₹{cost}</p>
        <i class="fas fa-times-circle"></i>
      </div>
    </div>
  );
};

export default Expenses;
