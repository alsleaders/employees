import React, { useState } from 'react'
import axios from 'axios'
import GoHome from '../components/GoHome'

const COMPANYNAME = 'Leaders Imagined'
const API_URL = 'https://sdg-staff-directory-app.herokuapp.com/api'

export default function Home() {
  // this is where the form is going to get the employee information
  const [employee, setEmployee] = useState({})
  const [error, setError] = useState('')

  const sendEmployeeData = event => {
    event.preventDefault()
    // page resets
    event.target.reset()
    axios.post(`${API_URL}/${COMPANYNAME}/Employees`, employee).then(resp => {
      console.log({ resp })

      resp.status !== 200
        ? setError('You have missed a minion, try again')
        : setError('Updated!')
    })
  }

  return (
    <>
      <nav className="navBar">
        <h4>Add Employee Information</h4>
        <GoHome />
      </nav>
      <form className="style-form" onSubmit={sendEmployeeData}>
        <div className="style-items">
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
        </div>
        <div className="style-items">
          <p>Birth Date: </p>
          <input
            type="date"
            onChange={e =>
              setEmployee(prevData => {
                prevData.birthday = e.target.value
                return prevData
              })
            }
          />
        </div>
        <div className="style-items">
          <p> Hire Date: </p>
          <input
            type="date"
            onChange={e =>
              setEmployee(prevData => {
                prevData.hiredDate = e.target.value
                return prevData
              })
            }
          />
        </div>
        <div className="style-items">
          <p>
            This employee is full time?{' '}
            <input type="checkbox" value="full time" checked />{' '}
          </p>
        </div>
        <br />
        {/* <input
          type="text"
          placeholder="profile image"
          onChange={e =>
            setEmployee(prevData => {
              prevData.profileImage = e.target.value
              return prevData
            })
          }
        /> */}
        <br />
        <br />
        <div className="style-items">
          <input
            type="text"
            placeholder="job title"
            onChange={e =>
              setEmployee(prevData => {
                prevData.jobTitle = e.target.value
                return prevData
              })
            }
          />
          <input
            type="text"
            placeholder="job description"
            onChange={e =>
              setEmployee(prevData => {
                prevData.jobDescription = e.target.value
                return prevData
              })
            }
          />
        </div>
        <br />
        <br />
        <div className="style-items">
          <input
            type="text"
            placeholder="phone number"
            onChange={e =>
              setEmployee(prevData => {
                prevData.phoneNumber = e.target.value
                return prevData
              })
            }
          />
          <br />
          <input
            type="text"
            placeholder="address"
            onChange={e =>
              setEmployee(prevData => {
                prevData.address = e.target.value
                return prevData
              })
            }
          />
          <input
            type="text"
            placeholder="city"
            onChange={e =>
              setEmployee(prevData => {
                prevData.city = e.target.value
                return prevData
              })
            }
          />
          <input
            type="text"
            placeholder="zip"
            onChange={e =>
              setEmployee(prevData => {
                prevData.zip = e.target.value
                return prevData
              })
            }
          />
          <input
            type="text"
            placeholder="state"
            onChange={e =>
              setEmployee(prevData => {
                prevData.state = e.target.value
                return prevData
              })
            }
          />
        </div>
        <br />
        <div className="style-items">
          <p>
            Salary{' '}
            <input
              type="number"
              min="10"
              max="500"
              onChange={e =>
                setEmployee(prevData => {
                  prevData.salary = e.target.value
                  return prevData
                })
              }
            />{' '}
            k per year{'  '}
          </p>
        </div>
        <div className="style-items">
          <input
            type="text"
            placeholder="gender"
            onChange={e =>
              setEmployee(prevData => {
                prevData.gender = e.target.value
                return prevData
              })
            }
          />
          <input
            type="text"
            placeholder="email"
            onChange={e =>
              setEmployee(prevData => {
                prevData.email = e.target.value
                return prevData
              })
            }
          />
          <br />
          <br />
        </div>
        <div className="style-items">
          <input
            type="text"
            placeholder="emergency contact person"
            onChange={e =>
              setEmployee(prevData => {
                prevData.emergencyContactPerson = e.target.value
                return prevData
              })
            }
          />
          <input
            type="text"
            placeholder="emergency contact phone"
            onChange={e =>
              setEmployee(prevData => {
                prevData.emergencyContactPhone = e.target.value
                return prevData
              })
            }
          />
          <input
            type="text"
            placeholder="emergency contact address"
            onChange={e =>
              setEmployee(prevData => {
                prevData.emergencyContactAddress = e.target.value
                return prevData
              })
            }
          />
        </div>
        <div className="style-items">
          <p> PTO Hours </p>
          <input
            type="number"
            min="0"
            max="500"
            onChange={e =>
              setEmployee(prevData => {
                prevData.ptoHours = e.target.value
                return prevData
              })
            }
          />
        </div>
        <div className="be-centered">
          {error && <p className="error">{error}</p>}
        </div>
        <button onClick={() => sendEmployeeData}>Submit</button>
      </form>
    </>
  )
}
