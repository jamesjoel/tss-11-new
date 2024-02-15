import React from 'react'
import Header from './components/shared/Header'
import Footer from './components/shared/Footer'
import AllRoutes from './allRoutes/AllRoutes'

import Name from './Context/NameContext';

const App = () => {

  const AllData = "Google";

  return (
    <>
        <Name.Provider value={AllData}>
          <Header />
              <div style={{minHeight : "700px"}}>
                  <AllRoutes />
              </div>
          <Footer />
        </Name.Provider>
    </>
  )
}

export default App