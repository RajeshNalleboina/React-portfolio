import React from 'react'

function ProjectCard({title,discription,imageUrl}) {
    return (
        <div className="card shadow h-100">
        <img className="card-img-top" src={imageUrl} alt={title} />
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{discription}</p>
          <a href="/" className="stretched-link"></a>
        </div>
      </div>    
    )
}

export default ProjectCard;
