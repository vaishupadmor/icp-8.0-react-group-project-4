import React from 'react';
import  "blaze-esports.css"
import { TEAM_INTRODUCTION ,MAIN_TITLE} from '../config/data';

function TEAM_INFO(){
return (
    <div >
        <h1 className='main-title'>{MAIN_TITLE}</h1>
        <div className='intro-cards-container'>
       {
        TEAM_INTRODUCTION.map((cardItem)=>{
          return<TEAM_INTRODUCTION imgUrl={TEAM_INTRODUCTION.imgUrl}
          title={TEAM_INTRODUCTION.title}
          description={TEAM_INTRODUCTION.description}
          
          />

        }
        )
       }
       </div>

        </div>
  )
}

export default TEAM_INFO
