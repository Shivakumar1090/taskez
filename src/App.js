import './App.css';
import AuthHome from './compoents/auth';
import Navbar from './compoents/appbar';
import Home from './compoents/home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route 
             exact
             path="/"
             element={<AuthHome/>}
          ></Route>
          <Route
            exact
            path="/home"
            element={<Home/>}
          >
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

