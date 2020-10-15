import React from 'react'

function LatestBlogCard({title,text,img}) {
    return (   
        <div className="card my-2 shadow h-100">
        <img className="card-img-top" src={img} alt={title} />
        <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <p className="card-text">{text}</p>
            <a href="/" className="stretched-link"></a>
        </div>
        </div>

    )
}

export default LatestBlogCard;
