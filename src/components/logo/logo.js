import React from 'react'
import styles from './logo.module.css'
import logo from '../../static/img/header-logo.svg'

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={logo} alt="" />
    </div>
  )
}

export default Logo
