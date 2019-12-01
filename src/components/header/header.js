import React from 'react'
import styles from './header.module.css'
import Logo from '../logo'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Link to='/main' className={styles.buttonToAdd}>Добавить +</Link>
    </header>
  )
}

export default Header