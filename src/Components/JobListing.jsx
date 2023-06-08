import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../App.css'
export default function JobListing() {

  const navigate = useNavigate();
  const [data, setData] = useState([])
  const [orignalData, setOrignalData] = useState([])

  const getData = () => {
    axios.get("https://api.smartrecruiters.com/v1/companies/smartrecruiters/postings/").then((res) => {
      // console.log("Data",res.data.content)
      setData(res.data.content)
      setOrignalData(res.data.content)
    }).catch((error) => {
      console.log("Show ERROR", error.message, error.code)
    })
  }

  const FilterSuggetion = (Mappeditem,singalitem) => {
    const filterData = data.filter((Filteritem) => Filteritem.department.label == Mappeditem && Filteritem.name!==singalitem.name)
    // setSuggestion(filterData)
    navigate('/SingalJobAndSuggestion', { state: { suggestion:filterData,singal:singalitem} });

  }

  const SearchFuntion = (e) => {

    const SearchData = data.filter((event) => (event.name).toLowerCase().includes(e.toLowerCase()))
    console.log("Datare", SearchData, e)

    if (e) {
      setData(SearchData)
    }
    else {
      setData(orignalData)
    }

  }
  // console.log("Suggetion", suggetion)
  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <div className='searchBarDiv'>
        <input className='SearchBar' onChange={(e) => SearchFuntion(e.target.value)} placeholder='Search Job' />
        <button onClick={() => SearchFuntion()}>search</button>
      </div>
      {
        data.length !== 0 ? <div className='MainDiv'>
          {
            data.map(item =>
              <div className='IndivualDiv' onClick={() => FilterSuggetion(item.department.label,item)}>
                <h4 >{item.name}</h4>
                <p>Loaction :-<span>{item.location.city}</span></p>
                <p>Work Mode :-<span>{item.location.region}</span></p>
                <p>Department :-<span>{item.department.label}</span></p>
                <p>Experience Level :-<span>{item.experienceLevel.label}</span></p>
                <p>Industry :-<span>{item.industry.label}</span> </p>
                <p>Employment Type :-<span>{item.typeOfEmployment.id},{item.typeOfEmployment.label}</span></p>

              </div>
            )
          }
        </div> : <div>Loading Data ...</div>
      }
    </>
  )
}
