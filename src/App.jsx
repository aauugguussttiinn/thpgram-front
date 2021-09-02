import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux"
import Cookies from "js-cookie";

import Home from 'pages/Home/Home';
import Register from 'pages/Register/Register';
import Login from 'pages/Login/Login';
import Profile from 'pages/Profile/Profile';
import NotFound from 'pages/NotFound/NotFound';

import Navigation from 'components/Navigation/Navigation';
import Loader from 'components/Loader/Loader';

const App = () => {

  const currentUser = useSelector((state) => state.userReducer.user);
  const [isAuthTrue, setIsAuthTrue] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth().then(res => {
      setIsAuthTrue(res);
      setLoading(false);
    })
  });

  const loginUserWithCookie = async() => {
    const token = Cookies.get('token');

    const cookiesConfig = {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
  
    const response = await fetch(`http://localhost:1337/users/me`, cookiesConfig)
    const cookieData = await response.json();
    if (!cookieData.error) {
      return true;
    } else {
      return false;
    }

  };

  const checkAuth = async() => {
    const a = await (loginUserWithCookie());
    if (currentUser || a === true) {
      return true;
    } else {
      return false;
    }
  }

  const PrivateRoute = ({ component: Component, ...rest }) => (
      <>
        { loading ? (
          <Loader type='spin' color='#454545' />
        ) : ( 
          < Route {...rest} render={ props => ( isAuthTrue ? ( <Component {...props} />) : (  <Redirect to={{ pathname: '/login' }} /> ) )} />)
        }
      </>
  );

  return (
    <BrowserRouter>
        <Navigation auth={ isAuthTrue }/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
          <PrivateRoute path="/profile" exact component={Profile} />
          <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
  );
};

export default App;