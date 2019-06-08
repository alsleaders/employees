import React, { useState, useEffect } from 'react'
import axios from 'axios'
import EmployeeBlueprint from '../components/EmployeeBlueprint'
import GoAdd from '../components/GoAdd'

const COMPANYNAME = 'Leaders Imagined'
const API_URL = 'https://sdg-staff-directory-app.herokuapp.com/api'

export default function Home() {
  const [employeeList, setEmployeeList] = useState([])

  useEffect(() => {
    axios.get(`${API_URL}/${COMPANYNAME}/employees`).then(resp => {
      console.log(resp.data)
      setEmployeeList(resp.data)
    })
  }, [])

  const deleteEmployee = employeeID => {
    axios
      .delete(`${API_URL}/${COMPANYNAME}/employees/${employeeID}`)
      .then(resp => {
        console.log('deleted')
        setEmployeeList([])
      })
  }

  return (
    <>
      <main>
        <h1>Hello, Minions!</h1>
        <GoAdd />
        <ul>
          {employeeList.map(person => {
            return (
              <li>
                <EmployeeBlueprint
                  key={person.index}
                  employee={person}
                  deleteEmployee={person.id}
                />
              </li>
            )
          })}
        </ul>
      </main>
    </>
  )
}
