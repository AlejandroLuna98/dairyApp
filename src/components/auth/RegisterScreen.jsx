import React from 'react';
import { Link } from 'react-router-dom';

export const RegisterScreen = () => {
  return (
    <div>
      <h3 className="auth__title">Register</h3>
      <hr />
      <form action="">
        <input
          className="auth__input"
          type="text"
          placeholder="Name"
          name="text"
          autoComplete="off"
        />
        <input
          className="auth__input"
          type="email"
          placeholder="Email"
          name="email"
          autoComplete="off"
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Password"
          name="password2"
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Confirm password"
          name="password"
        />
        <button type="submit" className="btn btn-primary btn-block mb-5">
          Login
        </button>
        <Link to={'/auth/register'} className="link ">
          Already registered?
        </Link>
      </form>
    </div>
  );
};
