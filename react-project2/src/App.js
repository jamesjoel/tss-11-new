import React from 'react'
import Header from './components/shared/Header'
import Footer from './components/shared/Footer'
import Allroutes from './allRoutes/Allroutes'


const App = () => {
  return (
    <>
    <Header/>
     <div className='container' style={{minHeight : "600px"}}>
     <Allroutes/>
     </div>
    <Footer/>
    
    </>
  )
}

export default App