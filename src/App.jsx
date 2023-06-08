
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import JobListing from './Components/JobListing'
import SingleJobDes from './Components/SingleJobDes'

function App() {

  return (
    <div>
      {/* <Link to={'/'}>Home</Link>
      <Link to={'/about'}>about</Link> */}
   
    <Routes>

      <Route path="/" exact element={<JobListing/>} />
      <Route path="/SingalJobAndSuggestion" element={<SingleJobDes />} />
    </Routes>
    </div>
    

  )
}

export default App

// Create a simple job portal website with two pages using ReactJS. The first page should display
// a list of jobs, including the job title, a small description, tags, stipend, duration, and other
// relevant information. The page should also include a search bar to search for jobs by name and
// a filter option to sort jobs by date. When a user clicks on a job, they should be navigated to the
// second page, which will show detailed information about the job, including the description, role,
// responsibilities, and a list of other jobs with similar titles at the bottom.
// >>>Requirements:
// 1. The website should be built using ReactJS.
// 2. Apply normal CSS styling to the website.
// 3. Job details should be fetched from a separate data file rather than hardcoded in the
// project.
// 4. Follow proper naming conventions for variables, components, and files.
// 5. Ensure proper code structuring and organization.
// 6. Using TypeScript is a plus.