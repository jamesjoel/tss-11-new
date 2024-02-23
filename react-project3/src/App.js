import React, { useEffect } from 'react'
import {NavLink} from 'react-router-dom'
import AllRoutes from './AllRoutes'
import { useDispatch, useSelector } from 'react-redux'
import { getAll } from './redux/StudentSlice'
const App = () => {

  let disp = useDispatch();
  useEffect(()=>{
    disp(getAll())
  },[])

  let data = useSelector(state=>state.StudentSlice);

  return (
    <>
    <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
            <div className="container">
                <a className="navbar-brand" href="">The Stepping Stone ({data.length})</a>
                <button data-bs-toggle="collapse" data-bs-target="#menu" className="navbar-toggler">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="menu">
                    <ul className="nav navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/student">Student</NavLink>
                        </li>
                        
                        
                    </ul>
                </div>
            </div>
        </nav>
      <div className='container my-4'>
        <AllRoutes />
      </div>
    </>
  )
}

export default App