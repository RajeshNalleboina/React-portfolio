import React from 'react'
import TechSkill from './Tskill';
import {v4 as uuid} from 'uuid'

function SkillsSection() {
    
    const skill=[
        {   

            name:"HTML5",
            imageUrl:require("../assets/html5.png"),
            starsTotal:3,
            starsActive:3
        },
        {
            name:"CSS3",
            imageUrl:require("../assets/css3.png"),
            starsTotal:3,
            starsActive:3
        },
        {
            name:"JS",
            imageUrl:require("../assets/js.png"),
            starsTotal:3,
            starsActive:2
        },
        {
            name:"Bootstrap4",
            imageUrl:require("../assets/bootstrap4.png"),
            starsTotal:3,
            starsActive:2
        },
        {
            name:"ReactJs",
            imageUrl:require("../assets/react.png"),
            starsTotal:3,
            starsActive:3
        },
        {
            name:"MySQL",
            imageUrl:require("../assets/mysql.png"),
            starsTotal:3,
            starsActive:2
        },
        {
            name:"Python",
            imageUrl:require("../assets/python.png"),
            starsTotal:3,
            starsActive:3
        },
        {
            name:"Flask",
            imageUrl:require("../assets/flask.png"),
            starsTotal:3,
            starsActive:2
        }
    ];
    const FinalRowSplit=[];
    for(let i=0; i<skill.length/4; i++){
        let skillRow=skill.slice(i*4,(i+1)*4);
        // console.log(skillRow);
        FinalRowSplit.push(
            <div key={uuid()} className="d-flex justify-content-around py-3">

           { 
           skillRow.map((row)=>(
            //    console.log(row.imageUrl)
               <TechSkill skill={row} key={uuid()}/>
            ))
        }
          </div>

        );
    }
    return (
        <div className="bg-light w-100">
        <div className="container text-center py-5">
          <h1 className="font-weight-light">
            <span className="text-info">Technology</span> Stack
          </h1>

          <div className="lead pb-5">
              I design, develop and deliver with these weapons</div>
        </div>
        {FinalRowSplit}

        </div>
    )
}

export default SkillsSection
