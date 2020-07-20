import React, { useState } from 'react';

const NewProject = () => {
  const [project, setProject] = useState({
    name: '',
  });

  const { name } = project;

  const onChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // TODO: validate project
    
    // TODO: add state

    // TODO: restart project
  }

  return (
    <>
      <button type="button" className="btn btn-primary btn-block">
        Nuevo Proyecto
      </button>
      <form className="form-new-project">
        <input
          type="text"
          name="name"
          className="input-text"
          placeholder="Nombre Proyecto"
          value={name}
          onChange={onChange}
        />
        <button type="submit" className="btn btn-primary btn-block">
          Agregar Proyecto
        </button>
      </form>
    </>
  );
};

export default NewProject;
