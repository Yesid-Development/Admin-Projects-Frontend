import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const NewAccount = () => {

  const [account, setAccount] = useState({
    name: '',
    email: '',
    password: '',
    verifyPass: '',
  }); 

  const { name, email, password, verifyPass} = account;

  const onChange = (e) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault()

    // TODO: validate than no there are no empty field

    // TODO: password of 6 characters minimum

    // TODO: validate two password are the same

    // TODO: create acction
    
  };
  
  return (
    <div className="form-user">
      <div className="container-form shadow-dark">
        <h1>Crear Nueva Cuenta</h1>

        <form onSubmit={onSubmit}>
          <div className="form-field">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Tu Nombre"
              value={name}
              onChange={onChange}
            />
          </div>
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
            <label htmlFor="verifyPass">Verificar Password</label>
            <input
              type="password"
              id="verifyPass"
              name="verifyPass"
              placeholder="Repite Contraseña"
              value={verifyPass}
              onChange={onChange}
            />
          </div>
          <div className="form-field">
            <button type="submit" className="btn btn-primary btn-block">
              Crear Cuenta
            </button>
          </div>
        </form>

        <Link to={'/'} className="account-link">
          ¿Ya tienes cuenta?
        </Link>
      </div>
    </div>
  );
};

export default NewAccount;
