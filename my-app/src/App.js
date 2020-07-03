import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import Home from './pages/mainPage';
import NotFoundPage from './pages/404';
import MajorDepartment from './pages/majorDepartmentSearch';
import Login from './pages/login';
import SignIn from './pages/signIn';

export default function App() {

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signIn">Sign In</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signIn" component={SignIn}/>
          <Route exact path="/majorDepartment" component={MajorDepartment}/>
          <Route path="/404" component={NotFoundPage}/>
          <Redirect to="/404" />
        </Switch>
      </div>
    </Router>
  );
};


