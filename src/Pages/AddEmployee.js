import React, { useState, useEffect } from 'react'
import axios from 'axios'

const COMPANYNAME = 'Leaders Imagined'
const API_URL = 'https://sdg-staff-directory-app.herokuapp.com/api'

export default function Home() {
  // this is where the form is going to get the employee information
  const [employee, setEmployee] = useState({})

  const sendEmployeeData = event => {
    event.preventDefault()
    axios.post(`${API_URL}/${COMPANYNAME}/Employees`, employee).then(resp => {
      console.log({ resp })
      // setEmployee(oldEmployee => oldEmployee.concat(resp.data))
    })
  }

  return (
    <>
      <h4> Don't worry about it</h4>
      <form onSubmit={sendEmployeeData}>
        <input
          type="text"
          placeholder="First Name"
          onChange={e =>
            setEmployee(prevData => {
              prevData.firstName = e.target.value
              return prevData
            })
          }
        />
        <input
          type="text"
          placeholder="Last Name"
          onChange={e =>
            setEmployee(prevData => {
              prevData.lastName = e.target.value
              return prevData
            })
          }
        />

        <p>Birth Date: </p>
        <input type="date" />
        <p> Hire Date: </p>
        <input type="date" />
        <p>
          {/* Is this employee full time?
          <input type="checkbox" value="full time" checked />{' '} */}
        </p>
        <br />
        <input type="text" placeholder="profile image" />
        <br />
        <br />
        <input type="text" placeholder="job title" />
        <input type="text" placeholder="job description" />
        <br />
        <br />
        <input type="text" placeholder="phone number" />
        <input type="text" placeholder="address" />
        <br />
        <br />
        <input type="text" placeholder="city" />
        <input type="text" placeholder="zip" />
        <input type="text" placeholder="state" />
        <br />
        <p> Salary </p>
        <input type="number" min="10.5" max="500" />
        <input type="text" placeholder="gender" />
        <input type="text" placeholder="email" />
        <br />
        <br />
        <input type="text" placeholder="emergency contact person" />
        <input type="text" placeholder="emergency contact phone" />
        <input type="text" placeholder="emergency contact address" />
        <p> PTO Hours </p>
        <input type="number" min="0" max="500" />
        <button onClick={() => sendEmployeeData} />
      </form>
    </>
  )
}