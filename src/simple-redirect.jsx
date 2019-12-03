import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

 
import Sideview from './sideview';
import Other from './other';

export default function SimpleRedirect() {
  return (
    <Router>
      <div>
        <ForgotButton />
        <Switch>
          <Route path="/sideview">
            <Sideview />
          </Route>
          <Route path="/other">
            <Other></Other>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
 
function ForgotButton() {
  let history = useHistory();

  return  (
    <p>
      <button
        onClick={() => history.push("/sideview")}
      >
        Particle Animation
      </button>
      <button
        onClick={() => history.push("/other")}
      >
        Other
      </button>
    </p>
  )  
}
 