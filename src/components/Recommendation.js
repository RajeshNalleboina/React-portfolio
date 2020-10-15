import React from 'react'
import RecommendationCards from './RecommendationCard'
import {v4 as uuid} from 'uuid'

function Recommendation() {
    var recommendations=[
        {
            message:"He is a Good Engineer for Andhra University",
            fback:"Recommendation 1",
            name:"CEO of ABC"
        },
        {
            message:"He has Good analytical skills",
            fback:"Recommendation 2",
            name:"CEO of XYZ"
        },
        {
            message:"He is a Good Developer",
            fback:"Recommendation 3",
            name:"CEO of ABC"
        },
        {
            message:"He is a Good Lerner",
            fback:"Recommendation 4",
            name:"CEO of C"
        },
        {
            message:"He is a Good Developer",
            fback:"Recommendation 5",
            name:"CEO of B"
        }
    ]
   
    return (
    <div className="container-fluid my-5">
      <div className="row text-center py-5 d-flex overflow-auto flex-nowrap scrollbar">
        {/* <style>
          .scrollbar::-webkit-scrollbar{
            display: none;
          }
        </style> */}
        {recommendations.map((rec)=>(
               <div className="col-12 col-md-4" key={uuid()}>
                   <RecommendationCards cardsData={rec} />
             </div>
        ))}
     
        </div>
        </div>
    )
}

export default Recommendation;
