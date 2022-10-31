import "./App.css";
import { nanoid } from "nanoid";
import Header from "./components/Header";
import Search from "./components/Search";
import ExpenseList from "./components/ExpenseList";
import AddExpense from "./components/AddExpense";
import { useState } from "react";

const App = () => {
  const [expenses, setExpenses] = useState([
    {
      id: nanoid(),
      name: "Shopping",
      cost: "2000",
    },
    {
      id: nanoid(),
      name: "Holiday",
      cost: "7000",
    },
    {
      id: nanoid(),
      name: "Transport",
      cost: "3000",
    },
  ]);

  const addExp = (cost) => {
    const addExpense = {
      id: nanoid(),
      name: "name",
      cost: cost,
    };
    const newExpenses = [...expenses, addExpense];
    setExpenses(newExpenses);
  };

  return (
    <div className="App">
      <Header />
      <Search />
      <ExpenseList expenses={expenses} />
      <AddExpense handleCostExp={addExp} />
    </div>
  );
};

export default App;
