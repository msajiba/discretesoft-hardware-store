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


function App() {

  return (
    
          <>

          
            <Header />

              <Routes>
                  <Route path='/' element={  <Home />  } > </Route>
                  <Route path='purchase/:id' element={ <RequireAuth> <Purchase /> </RequireAuth> } > </Route>
                  <Route path='dashboard' element={ <RequireAuth> <Dashboard /> </RequireAuth> } > 

                      <Route index element={<MyOrders />} > </Route>
                      <Route path='addReview' element={<AddReview />} > </Route>
                      <Route path='myProfile' element={<MyProfile />} > </Route>
                      
                  </Route>
                  <Route path='login' element={<Login />} > </Route>
                  <Route path='register' element={<Register />} > </Route>
              </Routes>

            <Footer />
              

            <ToastContainer />

          </>
  )
}

export default App
