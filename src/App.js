import React from "react";
import { AppProvider } from "./context/AppContext";
import "./App.css";
import Header from "./components/Header";
import ExpenseList from "./components/ExpenseList";
import AddExpense from "./components/AddExpense";

const App = () => {
  return (
    <AppProvider>
      <div className="App">
        <Header />
        <ExpenseList />
        <AddExpense />
      </div>
    </AppProvider>
  );
};

export default App;
