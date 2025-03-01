import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from '.@/components/Register';
import Authenticate from '.@/components/Authenticate';

function App() {
  return (
    <Router>
      <div>
        <h1>GhostPass</h1>
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/authenticate" component={Authenticate} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
