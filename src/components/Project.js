import React from 'react'
import ProjectCard from './ProjectCard'
import {v4 as uuid} from 'uuid'

export default function Project() {
  const projects=[
    {
    title: "Project1",
    discription:"This is my project about...",
    imageUrl: "https://themes.muffingroup.com/be/portfolio/wp-content/uploads/2014/09/home_portfolio_portfolio_5-1200x800.jpg"
  },
  {
    title: "Project2",
    discription:"This is my project about...",
    imageUrl: "https://www.wrike.com/blog/content/uploads/2017/03/PREVIEW-project-portfolio-manager-820x483.jpg"
  },
  {
    title: "Project3",
    discription:"This is my project about...",
    imageUrl: "https://www.shillingtoneducation.com/content-blog/uploads/2017/11/photo-of-designer-creating-a-website.jpg"
  }
]  
  return (
        <div className="container text-center my-5">
          <h1 className="font-weigth-light">
            My <span className="text-info">Projects</span>
          </h1>
          <div className="lead">I build a projects just like website</div>
          <div className="row my-5 pt-3">
            {
              projects.map((projectData)=>(
            <div className="col-12 col-md-4 my-2" key={uuid()}>
                <ProjectCard title={projectData.title} description={projectData.discription} imageUrl={projectData.imageUrl}/>
            </div>
              ))
            }
            </div>
          </div>
         
    )
}
