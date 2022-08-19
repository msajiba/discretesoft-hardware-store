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


function App() {

  return (
    
          <>

          
            <Header />

              <Routes>
                  <Route path='/' element={  <Home />  } > </Route>
                  <Route path='purchase/:id' element={ <RequireAuth> <Purchase /> </RequireAuth> } > </Route>
                  <Route path='login' element={<Login />} > </Route>
                  <Route path='register' element={<Register />} > </Route>
              </Routes>

            <Footer />
              

            <ToastContainer />

          </>
  )
}

export default App
