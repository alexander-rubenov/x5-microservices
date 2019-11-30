import React from 'react'
import {connect} from 'react-redux'
import Department from '../department'


const Departments = (props) => {
  const { departments } = props

  return (
    <ul>
      {departments.map(department => {
        return (
          <Department key={department.id} department={department} />
        )
      })}
    </ul>
  )
}

const mapStateToProps = state => ({
  departments: state.departments
})

export default connect(mapStateToProps)(Departments)
