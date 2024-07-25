import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import Screen from "./components/Screen";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} exact />
        <Route path="/" element={<Screen />} />
      </Routes>
    </Router>
  );
}

export default App;
