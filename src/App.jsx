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

  const loginUserWithCookie = async() =>{
    const token = Cookies.get('token');
    const id = Cookies.get('id');

    const cookiesConfig = {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        // Authorization: `${token}`,
      },
    };
  
    const response = await fetch(`http://localhost:3000/api/users/${id}`, cookiesConfig)
    const cookieData = await response.json();
    console.log(cookieData);
    if (!cookieData.error) {
      console.log("is true");
      return true;
    } else {
      console.log("is false");
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


  // see at the bottom the other syntax for private route
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




// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <>
//     { loading ? (
//       <Loader type='spin' color='#454545' />
//     ) : ( 
//       <></>
//     )
//     }
//     { isAuthTrue ? (
//       < Route {...rest} render={ props => ( ( <Component {...props} />))} />
//        ):(
//        <Redirect to={{ pathname: '/login' }} /> )
//     }
//   </>
// );