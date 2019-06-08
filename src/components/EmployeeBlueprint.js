import React from 'react'
import { Link } from 'react-router-dom'

export default function PFC(props) {
  // let employeeNumber = props.match.params.employeeId
  // stuff about individual employee

  return (
    <>
      <Link to={`/employee/${props.elephant.id}`}>
        <h4>
          {props.elephant.firstName} {props.elephant.lastName}
        </h4>{' '}
      </Link>
    </>
  )
}
