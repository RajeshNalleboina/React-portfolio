import React from 'react'
import Latest from './LatestBlogCard'


export default function LatestBlog() {
  let data=[
    {
      title:"Blog-1",
      text:"This is my blog1...",
      imgUrl: require("../assets/project1.jpg")
    },
    {
      title:"Blog-2",
      text:"This is my blog2...",
      imgUrl: require("../assets/project2.jpg")
    },
    {
      title:"Blog-3",
      text:"This is my blog3...",
      imgUrl: require("../assets/project3.jpg")
    }
  ];
    return (
            <div className="container text-center my-5">
              <h1 className="font-weigth-light">
                Latest <span className="text-info">Blogs</span>
              </h1>
              <div className="lead">I Share my views on technologies in the blogs...</div>
              <div className="row my-5 pt-3">
              {
                data.map((blog,index)=>(
                  <div className="col-12 col-md-4 my-2" key={index}>
                    <Latest title={blog.title} text={blog.text} img={blog.imgUrl}/>
                  </div>
                ))
              }
            </div>
            </div>
    )
}
