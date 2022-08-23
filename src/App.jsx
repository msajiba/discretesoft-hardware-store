import react from 'react'
import './App.css';
import { ToastContainer } from 'react-toastify';
import { Routes,Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';
import Header from './Pages/Shared/Header';
import Footer from './Pages/Shared/Footer';
import RequireAuth from './Pages/Auth/RequireAuth';
import Purchase from './Pages/Purchase/Purchase';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddReview from './Pages/Dashboard/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import Payment from './Pages/Payment/Payment';
import ManageOrder from './Pages/Dashboard/Admin/ManageOrder';
import AddProduct from './Pages/Dashboard/Admin/AddProduct';
import MakeAdmin from './Pages/Dashboard/Admin/MakeAdmin';
import ManageProduct from './Pages/Dashboard/Admin/ManageProduct';
import Blog from './Pages/Blog/Blog';
import Portfolio from './Pages/Portfolio/Portfolio';
import NotFound from './Pages/NotFound/NotFound';


function App() {

  return (
    
          <>

          
            <Header />

              <Routes>
                  <Route path='/' element={ <Home /> } > </Route>
                  <Route path='blog' element={ <Blog /> } > </Route>
                  <Route path='portfolio' element={ <Portfolio /> } > </Route>
                  <Route path='purchase/:id' element={ <RequireAuth> <Purchase /> </RequireAuth> } > </Route>

                  <Route path='dashboard' element={ <RequireAuth> <Dashboard /> </RequireAuth> } > 
                      <Route index element={<MyProfile /> } > </Route>
                      <Route path='addReview' element={<AddReview />} > </Route>
                      <Route path='myOrders' element={<MyOrders />} > </Route>
                      <Route path='manageOrder' element={<ManageOrder />} > </Route>
                      <Route path='addProduct' element={<AddProduct />} > </Route>
                      <Route path='makeAdmin' element={<MakeAdmin />} > </Route>
                      <Route path='manageProduct' element={<ManageProduct />} > </Route>
                  </Route>

                  <Route path='payment/:id' element={<Payment />} > </Route>
                  <Route path='login' element={<Login />} > </Route>
                  <Route path='register' element={<Register />} > </Route>
                  <Route path='*' element={<NotFound />} > </Route>
              </Routes>

            <Footer />
              

            <ToastContainer />

          </>
  )
}

export default App
