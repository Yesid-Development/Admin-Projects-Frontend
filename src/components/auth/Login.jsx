import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // TODO: validate than no there are empty fields

    // TODO: create action
  };

  return (
    <div className="form-user">
      <div className="container-form shadow-dark">
        <h1>Iniciar Sesión</h1>

        <form onSubmit={onSubmit}>
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tu Correo Electrónico"
              value={email}
              onChange={onChange}
            />
          </div>
          <div className="form-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Tu Contraseña"
              value={password}
              onChange={onChange}
            />
          </div>
          <div className="form-field">
            <button type="submit" className="btn btn-primary btn-block">
              Iniciar Sesión
            </button>
          </div>
        </form>

        <Link to={'/new-account'} className="account-link">
          Registrarse
        </Link>
      </div>
    </div>
  );
};

export default Login;
