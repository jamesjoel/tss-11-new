import React from 'react'


import AllRoutes from './allRoutes/AllRoutes'
import Header from './Component/Sheard/Header'
import Footer from './Component/Sheard/Footer'


const App = () => {
  return (
    <>
    <Header/>
    <div className="container my-4"  style={{minHeight : "700px"}}>
   <AllRoutes/>
      <Footer/> 
    </div>
    </>
  )
}

export default App