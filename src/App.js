import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Home from "./components/home/Home";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/register">
            <Register></Register>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
