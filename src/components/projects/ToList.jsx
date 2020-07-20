import React from 'react';
import Project from './Project';

const ToList = () => {
  const projects = [
    { name: 'Tienda Virtual' },
    { name: 'Intranet' },
    { name: 'Diseño de Pagina Web' },
  ];

  return (
    <ul className="list-projects">
      {projects.map((project) => (
        <Project project={project} />
      ))}
    </ul>
  );
};

export default ToList;
