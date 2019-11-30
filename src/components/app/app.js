import React from 'react'
import Header from '../header'
import { store } from '../../store'
import { Provider } from 'react-redux'
// import ContentWrapper from '../content-wrapper'
import SearchMicroservices from '../search-microservices'
import Footer from '../footer'

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      {/* <ContentWrapper /> */}
      <SearchMicroservices />
      <Footer />
    </Provider>
  )
}

export default App
