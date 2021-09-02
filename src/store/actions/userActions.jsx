export const CREATE_USER = 'CREATE_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGIN_USER';
export const SET_USER_PROFILE = 'SET_USER_PROFILE';
export const EDIT_USER_PROFILE = 'EDIT_USER_PROFILE';

// BELOW IS THE FUNCTION TO CREATE A USER

export const createUser = (data) => {
  return (dispatch) => {
    return fetch('http://localhost:1337/auth/local/register', {
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

  const res = await fetch('http://localhost:1337/auth/local', config)
  const data = await res.json();
  if (data.user) {
    dispatch({ type: LOGIN_USER, payload: data });
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