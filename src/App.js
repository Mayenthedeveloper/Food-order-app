import "./App.css";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact component={Home} />
          {/* <Route exact path="/" element={<Home />} /> */}
          <Route path="/contact" exact component={Contact} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
