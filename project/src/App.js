import React from 'react'
import Header from './components/shared/Header'
import Slider from './components/shared/Slider'
import Footer from './components/shared/Footer'
import AllRoutes from './allRoutes/AllRoutes';
const App = () => {
  return (
    <>
      <Header />
      <Slider />
        <AllRoutes />
      <Footer />
    </>
  )
}

export default App