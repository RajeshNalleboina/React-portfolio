import React from 'react'



export default function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm fixed-top bg-white">
      <div className="container my-2">
        <a href="/" className="navbar-center text-dark font-weight-bold">Rajesh Nalleboina</a>
        
        <button className="btn btn-outline-info ml-auto">
          Contact me
        </button>

        <button className="navbar-toggler" data-toggle="collapse" data-target="#collapsenav"> 
          <span className="fa fa-bars text-dark"></span>
        </button>
        <div className="collapse navbar-collapse flex-grow-0" id="collapsenav">
          <div className="navbar-nav">
            <a href="#" className="nav-item nav-link text-dark font-weight-bold mx-3">Blogs </a>
          </div>
          <div className="navbar-nav">
            <a href="" className="nav-item nav-link text-dark font-weight-bold mx-3">Projects</a>
          </div>
        </div>   
      </div>
      
    </nav>

        </div>
    )
}
