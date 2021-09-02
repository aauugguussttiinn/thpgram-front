import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from 'pages/Home/Home';
import Register from 'pages/Register/Register';
import Login from 'pages/Login/Login';
import Profile from 'pages/Profile/Profile';
import NotFound from 'pages/NotFound/NotFound';

// import Navigation from 'components/Navigation/Navigation';
import Loader from 'components/Loader/Loader';


const App = () => {

  return (
    <BrowserRouter>
        {/* <Navigation auth={ isAuthTrue }/> */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
          <Route path="/profile" exact component={Profile} />
          <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
  );
};

export default App;