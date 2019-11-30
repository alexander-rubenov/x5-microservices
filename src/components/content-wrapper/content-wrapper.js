import React from 'react'
import Departaments from '../departments'
import styles from './content-wrapper.module.css'

const ContentWrapper = () => {
  return (
    <div className={styles.wrapper}>
      <Departaments />
    </div>
  )
}

export default ContentWrapper