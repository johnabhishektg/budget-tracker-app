import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import ExpenseList from "./components/ExpenseList";
import AddExpense from "./components/AddExpense";
import { AppProvider } from "./context/AppContext";

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
