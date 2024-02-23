import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { getAllData } from './redux/CartSlice'

import AllRoutes from './allRoutes/AllRoutes';

const App = () => {

  let disp = useDispatch();
  useEffect(()=>{
    if(localStorage.getItem("access-token")){
      disp(getAllData());
    }
  },[])
  return (
    <>
        <AllRoutes />
    </>
  )
}

export default App