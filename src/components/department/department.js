import React, {useState, useCallback} from 'react'
import styles from './department.module.css'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'

const Department = (props) => {
  const { department } = props

  const [currentDepartmentId, setCurrentDepartmentId] = useState(props.department.id)

  const handleDepartmentChange = useCallback(id => setCurrentDepartmentId(id), [
    setCurrentDepartmentId,
  ])

  return (
    <Link to='/department-card' onClick={handleDepartmentChange} >
      <li className={styles.department}>
        <img className={styles.image} src={department.iconPath} alt='Изображение не поддерживается' />
        <h3 className={styles.title}>{department.name}</h3>
      </li>
    </Link>
  )
}

const mapStateToProps = state => ({
  currentDepartment: state.currentDepartment,
})

export default connect(mapStateToProps)(Department)