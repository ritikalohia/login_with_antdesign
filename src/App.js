import './App.css';
import Login from "./Components/login/Login";
import './my-theme-file.less';
import Navbar from './Components/navbar/Navbar';
import {BrowserRouter as Router} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Login />
      </Router>
    </div>
  );
}

export default App;
