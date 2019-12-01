import React, {useState} from 'react'
import { connect } from 'react-redux'
import Header from '../header'
import Footer from '../footer'
import SearchMicroservices from '../search-microservices'
import Microservices from '../microservices'

const DepartmentCard = () => {
  return (
    <div>
      <Header />
      <SearchMicroservices />
      <Microservices />
      <Footer />
    </div>
  )
}

const mapStateToProps = state => ({
  departments: state.departments
})

export default connect(mapStateToProps)(DepartmentCard)
