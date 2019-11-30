import React from 'react'
import { connect } from 'react-redux'
import Department from '../department'
import styles from './departments.module.css'


const Departments = (props) => {
  const { departments } = props

  return (
    <ul className={styles.departmentsWrapper}>
      <li className={styles.titleWripper}>
        <h3 className={styles.title}>Показать все микросервисы</h3>
      </li>
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
