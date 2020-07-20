import React from 'react';
import NewProject from '../projects/NewProject';
import ToList from '../projects/ToList';

const SiderBar = () => {
  return (
    <aside>
      <h1>
        MERN<span>tasks</span>
      </h1>
      
      <NewProject />
      
      <div className="projects">
        <h2>Tus Proyectos</h2>
        
        <ToList />
        
      </div>
    </aside>
  );
};

export default SiderBar;
