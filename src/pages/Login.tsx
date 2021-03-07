import axios from 'axios';
import React, { SyntheticEvent, useState } from 'react';
import { Redirect } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    await axios.post(
      'http://localhost:8000/api/login',
      {
        email,
        password,
      },
      { withCredentials: true }
    );
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to={'/'} />;
  }

  return (
    <main className='form-signin'>
      <form onSubmit={submit}>
        <h1 className='h3 mb-3 fw-normal'>Please Sign In</h1>
        <input
          type='email'
          className='form-control'
          placeholder='Email'
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          className='form-control'
          placeholder='Password'
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='w-100 btn btn-lg btn-primary' type='submit'>
          Login
        </button>
      </form>
    </main>
  );
};

export default Login;
