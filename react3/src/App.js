import React, {useEffect} from 'react'
import Header from './components/shared/Header'
import AllRoutes from './routes/AllRoutes'
import { useDispatch } from 'react-redux'
import { getAllEmp } from './redux/EmployeeSlice'



const App = () => {
  let disp = useDispatch();

  useEffect(()=>{

    disp(getAllEmp());
  }, [])

  return (
    <>
      <Header />
      <AllRoutes />
    </>
  )
}

export default App