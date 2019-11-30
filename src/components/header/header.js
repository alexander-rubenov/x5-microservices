import React from 'react'
import styles from './header.module.css'
import Logo from '../logo'
import ButtonMicroserviceAdd from '../button-microservice-add'

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <ButtonMicroserviceAdd />
    </header>
  )
}

export default Header