import React from "react";
import { AppProvider } from "./context/AppContext";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import ExpenseList from "./components/ExpenseList";
import AddExpense from "./components/AddExpense";

const App = () => {
  return (
    <AppProvider>
      <div className="App">
        <Header />
        <Search />
        <ExpenseList />
        <AddExpense />
      </div>
    </AppProvider>
  );
};

export default App;
