import React from 'react'
import styles from './department.module.css'
import { Link } from 'react-router-dom'

const Department = (props) => {
  const { department } = props

  return (
    <Link to='/department-card' >
      <li className={styles.department}>
        <img className={styles.image} src={department.iconPath} alt='Изображение не поддерживается' />
        <h3 className={styles.title}>{department.name}</h3>
      </li>
    </Link>
  )
}

export default Department