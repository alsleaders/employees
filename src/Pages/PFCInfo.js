import React, { Component } from 'react'
import axios from 'axios'
import GoAdd from '../components/GoAdd'
import GoHome from '../components/GoHome'
import Moment from 'react-moment'

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
          <div className="body-of-info">
            <h2>
              {this.state.employee.firstName} {this.state.employee.lastName}'s
              information
            </h2>
            {/* <div className="profileImage">
              <img src={this.state.employee.profileImage} />
            </div> */}
            <br />
            Birthday -{' '}
            <Moment format="MMM Do YYYY">{this.state.employee.birthday}</Moment>
            <br />
            Hire Date -{' '}
            <Moment format="MMM Do YYYY">
              {this.state.employee.hiredDate}
            </Moment>
            <br />
            <div className="job-description">
              <h3>{this.state.employee.jobTitle}</h3> <br />
              <h3>{this.state.employee.jobDescription}</h3> <br />
            </div>
            {this.state.employee.phoneNumber} <br />
            {this.state.employee.address} <br />
            {this.state.employee.city} <br />
            {this.state.employee.zip} <br />
            {this.state.employee.state} <br />
            Salary is ${this.state.employee.salary} per year
            <br />
            {this.state.employee.gender} <br />
            {this.state.employee.email} <br />
            <p className="emergency-contact">Emergency Contact Info:</p>
            {this.state.employee.emergencyContactPerson} <br />
            {this.state.employee.emergencyContactPhone} <br />
            {this.state.employee.emergencyContactAddress} <br />
            {this.state.employee.firstName} has {this.state.employee.ptoHours}{' '}
            hours of PTO available
            {parseInt(this.state.employee.ptoHours) > 40 ? (
              <h3>Make her take a vacation!</h3>
            ) : (
              ''
            )}
            <br />
          </div>
        </main>
      </>
    )
  }
}

export default PFCInfo
