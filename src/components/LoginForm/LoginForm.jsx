import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from "redux/actions/userActions";

const LoginForm = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();


  const handleLogin = async (e) => {
    e.preventDefault();

    if (email && password) {
      const userData = {
        identifier: email,
        password,
      };

      await dispatch(loginUser(userData))
    }
};
  
  return (
    <div className="d-flex">
      <div className="col-3"></div>
      <form className="col-6" onSubmit={ (e) => handleLogin(e) }>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" autoComplete="username"
            id="exampleInputEmail2" placeholder="Enter email" value={email} onChange={ (e) => setEmail(e.target.value) }></input>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" autoComplete="current-password"
            id="exampleInputPassword2" placeholder="Password" value={password} onChange={ (e) => setPassword(e.target.value) }></input>
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input"
            id="exampleCheck2"></input>
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <input type="submit" className="btn btn-primary" value="Envoyer" />
      </form>
      <div className="col-3"></div>
    </div>
  );
};

export default LoginForm;