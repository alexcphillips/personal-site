import "./App.css";
import Nav from "./Components/Nav";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <Outlet />
      </header>
    </div>
  );
}

export default App;
