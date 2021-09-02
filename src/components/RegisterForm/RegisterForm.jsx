import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser, loginUser } from "redux/actions/userActions";

const RegisterForm = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  
  const handleRegistration = async (e) => {
      e.preventDefault();

      if (email && password) {
        const userDataSignIn = {
          username,
          email,
          password,
        };
        const userDataLogIn = {
          identifier: email,
          password,
        };

        await dispatch(createUser(userDataSignIn));
        await dispatch(loginUser(userDataLogIn));
      }
  };
  
  return (
    <div className="d-flex">
      <div className="col-3"></div>
      <form className="col-6" onSubmit={ (e) => handleRegistration(e) }>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Username</label>
          <input type="text" className="form-control"
            id="exampleInputUsername" placeholder="Enter username" value={username} onChange={ (e) => setUsername(e.target.value) }></input>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control"
            id="exampleInputEmail1" placeholder="Enter email" value={email} onChange={ (e) => setEmail(e.target.value) }></input>
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control"
            id="exampleInputPassword1" placeholder="Password" value={password} onChange={ (e) => setPassword(e.target.value) }></input>
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input"
            id="exampleCheck1"></input>
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <input type="submit" className="btn btn-primary" value="Envoyer" />
      </form>
      <div className="col-3"></div>
    </div>
  );
};

export default RegisterForm;