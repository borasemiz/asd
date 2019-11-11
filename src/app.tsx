import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';

import { Navbar } from './navbar';
import { Sidebar } from './sidebar';
import Widgets from './pages/widgets';

export default (): React.ReactElement => (
  <Router>
    <React.Fragment>

      <Navbar />
      <Sidebar />

      <div className="content-wrapper">
        <Route
          exact path="/"
          component={() => <Redirect to="/widgets" />}
        />
        <Route
          path="/widgets"
          component={Widgets}
        />
      </div>
      
    </React.Fragment>
  </Router>
);
