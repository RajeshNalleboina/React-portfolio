import React from 'react'
import {v4 as uuid} from 'uuid'

function Tskill(props) {
    let {imageUrl,name,starsTotal,starsActive}=props.skill;
    let starsList=[];
    for(let i=0;i<starsTotal;i++){
        if( i<starsActive){
            starsList.push(<span className="text-info" key={uuid()}>★</span>)
        }else{
            starsList.push(<span key={uuid()}>★</span>)
        }
    }
    return (
        <div style={{textAlign:"center"}}>
            <img className="rounded-circle" src={imageUrl} alt={name + "Image"} style={{width: "100px", height: "100px"}} />
            <p>{starsList}</p>
      </div>
    );
}

export default Tskill
