import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import '../App.css'
export default function SingleJobDes(props) {
  const {state} = useLocation();
  const [Suggestion,setSuggestion] = useState(state.suggestion);
  const [SingalItem,setSingalItem] = useState([state.singal])


  console.log("Suggation",Suggestion);
  console.log("Singal Item To Map",SingalItem)
  return (  <div>
        <div>
          {
            SingalItem.map((item)=> <div className='IndivualDiv'>
                <h4 >{item.name}</h4>
                <p>Loaction :-<span>{item.location.city}</span></p>
                <p>Work Mode :-<span>{item.location.region}</span></p>
                <p>Department :-<span>{item.department.label}</span></p>
                <p>Experience Level :-<span>{item.experienceLevel.label}</span></p>
                <p>Industry :-<span>{item.industry.label}</span> </p>
                <p>Employment Type :-<span>{item.typeOfEmployment.id},{item.typeOfEmployment.label}</span></p>

              </div>)
          }
        </div>
        <div>
          {
            Suggestion.length==0?<h1>No Suggation Found</h1>:<div>
            <p>Suggation</p>
              {
                Suggestion.map((item)=><h1>{item.name}</h1>)
              }
            </div>
          }
        </div>
    </div>
  )
}
