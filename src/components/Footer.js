import React from 'react'

export default function Footer() {
    return (
        <footer>
        <div className="container-fluid text-center" style={{backgroundColor: "black"}}>
          <div className="col-12 py-5">
            <h2 className="text-light">Interested to working with me?</h2>
            <button className="btn btn-outline-light btn-lg">Let's talk</button>
          </div>
          <div className="row">
            <div className="col col-md-4 col-12">
              <h5 className="text-info">More Links</h5>
              <a href="" className="text-light d-block">Home</a>
              <a href="" className="text-light d-block">Contact me</a>
              <a href="" className="text-light d-block"
                >write recommandation <i className="fa fa-heart text-light"></i
              ></a>
            </div>
            <div className="col col-md-4 col-12 text-light text-justify py-3">
              Our Amazon Web Services' (AWS) Artificial Intelligence (AI) and
              Machine Learning (ML) Week returns on September 21. The webinar
              series shows nonprofit, government, education, and healthcare
              organizations how to use machine learning to advance their missions.
            </div>
            <div className="col col-md-4 col-12 text-light py-3">
              <h5 className="text-info">Social</h5>
              <a href=""><i className="fa fa-linkedin text-light h1 d-block"></i></a>
              <a href=""><i className="fa fa-github text-light h1 d-block"></i></a>
              <a href="">
                <i className="fa fa-envelope text-light h1 d-block"></i>
              </a>
            </div>
          </div>
          <div className="text-muted py-2">
            <p>Copyright Rajesh Nalleboina 2020</p>
          </div>
        </div>
      </footer>
  
    )
}
