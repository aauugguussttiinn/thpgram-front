import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

const App = () => {

  return (
    <BrowserRouter>
        <Navigation auth={ isAuthTrue }/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/pagename" exact component={PageName} />
          <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
  );
};

export default App;