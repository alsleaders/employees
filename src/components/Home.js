import React, { useState, useEffect } from 'react'
import axios from 'axios'

const COMPANYNAME = 'Leaders Imagined'
const API_URL = 'https://sdg-staff-directory-app.herokuapp.com/api'
export default function Home() {
  const [employeeList, setEmployeeList] = useState([])

  useEffect(() => {
    axios.get(`${API_URL}/${COMPANYNAME}/employees`).then(resp => {
      console.log(resp.data)
      setEmployeeList(resp.data)
    })
    // .then(person => {
    //   console.log(person)
    //   return person.data.data
    // })
  })

  // gonna need a Post for new employees

  return (
    <>
      <h1>Hello, Minions!</h1>
      <ul>
        {employeeList.map(person => {
          return (
            <li>
              <PFC key={person.id} />
            </li>
          )
        })}
      </ul>
    </>
  )
}
