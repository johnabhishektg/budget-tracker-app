import Expenses from "./Expenses";

const ExpensesList = ({ expenses }) => {
  return (
    <div className="expenses-list">
      {expenses.map((expense) => (
        <Expenses id={expense.id} name={expense.name} cost={expense.cost} />
      ))}
    </div>
  );
};

export default ExpensesList;
