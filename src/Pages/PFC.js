import React from 'react'

export default function PFC(props) {
  // stuff about individual employee

  return (
    <>
      <h4>
        {props.elephant.firstName} {props.elephant.lastName}
      </h4>
    </>
  )
}
