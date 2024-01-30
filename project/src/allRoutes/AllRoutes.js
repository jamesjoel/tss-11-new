import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/User/feature/Home';
import About from '../components/User/feature/About';
import Product from '../components/User/feature/Product';
import Cart from '../components/User/feature/Cart'
import Contact from '../components/User/feature/Contact';
import Demo from '../components/User/feature/Demo';
import Signup from '../components/User/feature/Signup';
import Login from '../components/User/feature/Login';
import Logout from '../components/User/feature/Logout';
import MyProfile from '../components/User/feature/MyProfile';
import UserModule from '../modules/UserModule'
import AdminModule from '../modules/AdminModule'
import AdminLogin from '../components/Admin/feature/Login'
import Dashboard from '../components/Admin/feature/Dashboard';
import AdminLogout from '../components/Admin/feature/Logout'
import AdminProduct from '../components/Admin/feature/Product'
import ProductList from '../components/Admin/feature/ProductList'

import Category from '../components/Admin/feature/Category'
import CategoryList from '../components/Admin/feature/CategoryList'
import SubCategory from '../components/Admin/feature/SubCategory'
import SubCategoryList from '../components/Admin/feature/SubCategoryList'
import Users from '../components/Admin/feature/Users'
import AdminProtectedModule from '../modules/AdminProtectedModule';
import BuyNow from '../components/User/feature/BuyNow';
import Invoice from '../components/User/feature/Invoice';
import ProductCategory from '../components/User/feature/ProductCategory';



const AllRoutes = () => {
  return (
    <Routes>
        <Route path='' element={<UserModule />}>
          <Route path='' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='login' element={<Login />} />
          <Route path='category/:catename' element={<ProductCategory />} />
          <Route path='logout' element={<Logout />} />
          <Route path='my-profile' element={<MyProfile />} />
          <Route path='product/:id' element={<Product />} />
          <Route path='contact' element={<Contact />} />
          <Route path='demo' element={<Demo />} />
          <Route path='signup' element={<Signup />} />
          <Route path='cart' element={<Cart />} />
          <Route path='buynow' element={<BuyNow />} />
          <Route path='invoice' element={<Invoice />} />
        </Route>


        <Route path='admin' element={<AdminModule />}>
          <Route path='' element={<AdminLogin />} />
          <Route path='' element={<AdminProtectedModule />}>
                <Route path='dashboard' element={<Dashboard />} />
                <Route path='product' element={<AdminProduct />} />
                <Route path='product/list' element={<ProductList />} />
                <Route path='category' element={<Category />} />
                <Route path='category/list' element={<CategoryList />} />
                <Route path='sub-category' element={<SubCategory />} />
                <Route path='sub-category/list' element={<SubCategoryList />} />
                <Route path='users' element={<Users />} />
                <Route path='logout' element={<AdminLogout />} />
          </Route>
        </Route>
    </Routes>
  )
}

export default AllRoutes