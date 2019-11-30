import React from 'react'
import styles from './department.module.css'

const Department = (props) => {
  const { department } = props

  return (
    <li className={styles.department}>
      <img className={styles.image} src={department.iconPath} alt='Изображение не поддерживается' />
      <h3 className={styles.title}>{department.name}</h3>
    </li>
  )
}

export default Department