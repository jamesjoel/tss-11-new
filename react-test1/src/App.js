import React from 'react'
import Header from './components/shared/Header'
import AllRoutes from './allRoutes/AllRoutes'

const App = () => {
  return (
    <>
        <Header />
        <div className='container my-4'>
            <AllRoutes />
        </div>
    </>
  )
}

export default App