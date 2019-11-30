import React from 'react'
import Departaments from '../departments'
import styles from './content-wrapper.module.css'
import SearchMicroservices from '../search-departments'

const ContentWrapper = () => {
  return (
    <div className={styles.wrapper}>
      <SearchMicroservices />
      <Departaments />
    </div>
  )
}

export default ContentWrapper