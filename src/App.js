import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import Orders from "./pages/Orders/Orders";
import Products from "./pages/Products/Products";
import Player from "./pages/Player/Player";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import BeforeFooter from "./components/BeforeFooter/BeforeFooter";
import BackToTop from "./components/BeforeFooter/BackToTop";
import Footer from "./components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import OrderConfirmation from "./pages/OrderConfirmation/OrderConfirmation";
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const App = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  const auth = getAuth();
  const [user, setUser] = useState(null);

  // Check user authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, [auth]);

  return (
    <>
      <ToastContainer />
      {!isLoginPage && <Header />}
      {!isLoginPage && <SubHeader />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:_id" element={<Products />} />
        <Route path="/player/:id" element={<Player />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/orders"
          element={
            <PrivateRoute>
              <Orders />
            </PrivateRoute>
          }
        />
        <Route path="/order-confirmation" element={<OrderConfirmation/>}/>
      </Routes>
      {!isLoginPage && !user && <BeforeFooter />}
      {!isLoginPage && <BackToTop />}
      {!isLoginPage && <Footer />}
    </>
  );
};

export default App;
