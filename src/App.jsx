import react, { useEffect } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import Header from "./Pages/Shared/Header";
import Footer from "./Pages/Shared/Footer";
import RequireAuth from "./Pages/Auth/RequireAuth";
import Purchase from "./Pages/Purchase/Purchase";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyOrders from "./Pages/Dashboard/MyOrders";
import AddReview from "./Pages/Dashboard/AddReview";
import MyProfile from "./Pages/Dashboard/MyProfile";
import Payment from "./Pages/Payment/Payment";
import ManageOrder from "./Pages/Dashboard/Admin/ManageOrder";
import AddProduct from "./Pages/Dashboard/Admin/AddProduct";
import MakeAdmin from "./Pages/Dashboard/Admin/MakeAdmin";
import ManageProduct from "./Pages/Dashboard/Admin/ManageProduct";
import Blog from "./Pages/Blog/Blog";
import Portfolio from "./Pages/Portfolio/Portfolio";
import NotFound from "./Pages/NotFound/NotFound";
import RequireAdmin from "./Pages/Auth/RequireAdmin";
import useAdmin from "./Pages/hooks/useAdmin";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./Firebase/Firebase";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  });

  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="blog" element={<Blog />}></Route>
        <Route path="portfolio" element={<Portfolio />}></Route>
        <Route
          path="purchase/:id"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        ></Route>

        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile />}></Route>
          {!admin && <Route path="addReview" element={<AddReview />}></Route>}
          {!admin && <Route path="myOrders" element={<MyOrders />}></Route>}

          {admin && (
            <Route
              path="manageOrder"
              element={
                <RequireAdmin>
                  <ManageOrder />
                </RequireAdmin>
              }
            ></Route>
          )}

          {admin && (
            <Route
              path="addProduct"
              element={
                <RequireAdmin>
                  <AddProduct />
                </RequireAdmin>
              }
            ></Route>
          )}

          {admin && (
            <Route
              path="makeAdmin"
              element={
                <RequireAdmin>
                  <MakeAdmin />
                </RequireAdmin>
              }
            ></Route>
          )}

          {admin && (
            <Route
              path="manageProduct"
              element={
                <RequireAdmin>
                  <ManageProduct />
                </RequireAdmin>
              }
            ></Route>
          )}
        </Route>

        <Route path="payment/:id" element={<Payment />}>
          {" "}
        </Route>
        <Route path="login" element={<Login />}>
          {" "}
        </Route>
        <Route path="register" element={<Register />}>
          {" "}
        </Route>
        <Route path="*" element={<NotFound />}>
          {" "}
        </Route>
      </Routes>

      <Footer />

      <ToastContainer />
    </>
  );
}

export default App;
