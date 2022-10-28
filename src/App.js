import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Expenses from "./components/Expenses";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Search />
      <Expenses />
    </div>
  );
};

export default App;
