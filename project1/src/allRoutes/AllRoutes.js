import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../Component/User/Feature/Home'
import About from '../Component/User/Feature/About'
import Cart from '../Component/User/Feature/Cart'
import SingleProduct from '../Component/User/Feature/SingleProduct'
import Signup from '../Component/User/Feature/Signup'
import Login from '../Component/User/Feature/Login'
import Logout from '../Component/User/Feature/Logout'
import Profile from '../Component/User/Feature/Profile'
import UserModule from '../modules/UserModule'
import AdminModule from '../modules/AdminModule'
import AdminLogin from '../Component/Admin/Feature/Login'
import Dashboard from '../Component/Admin/Feature/Dashboard'
import AdminLogout from '../Component/Admin/Feature/AdminLogout'
import AdminProduct from '../Component/Admin/Feature/Product'
import ProductList from '../Component/Admin/Feature/ProductList'
import Category from '../Component/Admin/Feature/Category'
import CategoryList from '../Component/Admin/Feature/CategoryList'
import SubCatogery from '../Component/Admin/Feature/SubCatogery'
import SubCategoryList from '../Component/Admin/Feature/SubCategoryList'
import Users from '../Component/Admin/Feature/Users'
import AdminProtectedModule from '../modules/AdminProtectedModule'


const AllRoutes = () => {
  return (
    <Routes>
     <Route path="" element={< UserModule/>}>
       <Route path='' element={<Home/>}/>
       <Route path='about' element={<About/>}/> 
       <Route path='cart' element={<Cart/>}/>  
       <Route path='singleproduct' element={<SingleProduct/>}/>
       <Route path='signup' element={<Signup/>}/>
       <Route path='login'element={<Login/>}/>
       <Route path='logout'element={<Logout/>}/>
       <Route path='profile'element={<Profile/>}/>
     </Route>


     <Route path='admin' element={< AdminModule/>}>
       <Route path=""  element={<AdminLogin/>} />

            <Route path='' element={<AdminProtectedModule/>}>
            <Route path='dashboard' element={< Dashboard/>}/>
            <Route path='logout' element={< AdminLogout/>}/>
            <Route path='product' element={< AdminProduct/>}/>
            <Route path='product/list' element={< ProductList/>}/>
            <Route path='category' element={< Category/>}/>
            <Route path='category/list' element={< CategoryList/>}/>
            <Route path='sub-category' element={< SubCatogery/>}/>
            <Route path='sub-category/list' element={< SubCategoryList/>}/>
            <Route path='user' element={< Users/>}/>
            <Route path='logout' element={< AdminLogout/>}/>
       </Route>

     </Route>
    </Routes>
  ) 
}

export default AllRoutes