import React from 'react'

const Department = (props) => {
  const { department } = props

  return (
    <li>
      <img src={department.iconPath} />
      <h3>{department.name}</h3>
    </li>
  )
}

export default Department