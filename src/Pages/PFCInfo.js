import React, { Component } from 'react'
import axios from 'axios'
import GoAdd from '../components/GoAdd'
import GoHome from '../components/GoHome'

const COMPANYNAME = 'Leaders Imagined'
const API_URL = 'https://sdg-staff-directory-app.herokuapp.com/api'

class PFCInfo extends Component {
  state = {
    employee: []
  }
  // fetch specific employee endpoint

  componentDidMount() {
    let employeeNumber = this.props.match.params.employeeId
    axios
      .get(`${API_URL}/${COMPANYNAME}/employees/${employeeNumber}`)
      .then(resp => {
        console.log(resp)
        console.log(resp.data)

        this.setState({
          employee: resp.data
        })
      })
  }

  render() {
    return (
      <>
        <main>
          <nav className="navBar">
            <GoAdd />
            <GoHome />
          </nav>
          <div>
            <h2>
              {this.state.employee.firstName} {this.state.employee.lastName}'s
              information
            </h2>
            <div className="profileImage">
              <img src={this.state.employee.profileImage} />
            </div>
            <br />
            {this.state.employee.birthday} <br />
            {this.state.employee.hiredDate} <br />
            {this.state.employee.jobTitle} <br />
            {this.state.employee.jobDescription} <br />
            {this.state.employee.phoneNumber} <br />
            {this.state.employee.address} <br />
            {this.state.employee.city} <br />
            {this.state.employee.zip} <br />
            {this.state.employee.state} <br />
            {this.state.employee.salary}
            <br />
            {this.state.employee.gender} <br />
            {this.state.employee.email} <br />
            {this.state.employee.emergencyContactPerson} <br />
            {this.state.employee.emergencyContactPhone} <br />
            {this.state.employee.emergencyContactAddress} <br />
            {this.state.employee.firstName} has {this.state.employee.ptoHours}{' '}
            hours of PTO available
            <br />
          </div>
        </main>
      </>
    )
  }
}

export default PFCInfo
