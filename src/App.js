import "./App.css";
import { nanoid } from "nanoid";
import Header from "./components/Header";
import Search from "./components/Search";
import ExpenseList from "./components/ExpenseList";
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

  return (
    <div className="App">
      <Header />
      <Search />
      <ExpenseList expenses={expenses} />
    </div>
  );
};

export default App;
