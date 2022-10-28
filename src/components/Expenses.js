const Expenses = () => {
  return (
    <div className="expenses-list">
      <div className="expense">
        <div className="exp-left">
          <p>Shopping</p>
        </div>
        <div className="exp-right">
          <p>₹2000</p>
          <i class="fas fa-times-circle"></i>
        </div>
      </div>
      <div className="expense">
        <div className="exp-left">
          <p>Holiday</p>
        </div>
        <div className="exp-right">
          <p>₹7000</p>
          <i class="fas fa-times-circle"></i>
        </div>
      </div>
      <div className="expense">
        <div className="exp-left">
          <p>Transport</p>
        </div>
        <div className="exp-right">
          <p>₹3000</p>
          <i class="fas fa-times-circle"></i>
        </div>
      </div>
    </div>
  );
};

export default Expenses;
