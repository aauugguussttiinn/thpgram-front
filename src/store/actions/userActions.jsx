import Cookies from "js-cookie";

export const CREATE_USER = 'CREATE_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGIN_USER';
export const SET_USER_PROFILE = 'SET_USER_PROFILE';
export const EDIT_USER_PROFILE = 'EDIT_USER_PROFILE';

// BELOW IS THE FUNCTION TO CREATE A USER

export const createUser = (data) => {
  return (dispatch) => {
    return fetch('http://localhost:3000/api/signup', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  };
};

// BELOW IS THE FUNCTION TO LOG IN A USER

export const loginUser = (userData) => async(dispatch) => {  
  
  const config = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  };

  const res = await fetch('http://localhost:3000/api/login', config)
  const user = await res.json();
  let token = await res.headers.get('authorization');
  if (user.data) {
    console.log("1234")
    Cookies.set('token', token.split(' ')[1], {secure: true});
    // Cookies.set('token', token);
    Cookies.set('id', user.data.id, {secure: true});
    dispatch({ type: LOGIN_USER, payload: user.data });
  } else {
    console.log('login fetch not working')
  }
};

// BELOW IS THE FUNCTION TO LOG OUT A USER

export const logoutUser = () => {
  return {}
};


// BELOW IS THE FUNCTION TO DETERMINE A CURRENT USER (USES COOKIES)

export const setUser = (cookiesConfig) => async(dispatch) => {

  const response = await fetch(`http://localhost:1337/users/me`, cookiesConfig)
  const cookieData = await response.json();
  dispatch({ type: SET_USER_PROFILE, payload: cookieData })
};

// BELOW IS THE FUNCTION TO EDIT A USER

export const editUser = (dataEdit, token) => async(dispatch) => {

  const config = {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(dataEdit)
  };

  const response = await fetch(`http://localhost:1337/users/me`, config)
  const newUserData = await response.json();
  console.log(newUserData)
  dispatch({ type: EDIT_USER_PROFILE, payload: newUserData })
};