import React from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";

import Login from "./pages/Login.jsx";
import AppLayout from "./pages/AppLayout.jsx";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import Search from "./pages/Search.jsx";
import ProductPages from "./pages/ProductPages.jsx";
import Search from "./pages/Search.jsx";
import FlashDeals from "./pages/FlashDeals.jsx";
import Checkout from "./pages/Checkout.jsx";
import MyOrders from "./pages/MyOrders.jsx";
import Addresses from "./pages/Addresses.jsx";

import ProtectedRoutes from "./components/ProtectedRoutes.jsx";
const App = () => {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: `#1b3022`,
            color: `#fff`,
            borderRadius: `12px`,
            fontSize: `14px`,
          },
        }}
      />
      <Routes>
        {/* Auth Pages */}
        <Route path="/login" element={<Login />} />
        {/* Main Pages */}
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductPages />} />
          <Route path="/search" element={<Search />} />
          <Route path="/deals" element={<FlashDeals />} />
          {/* Protected Routes :OrderTracking, Address, Orders*/}
          <Route element={<ProtectedRoutes />}>
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/orders" element={<MyOrders />} />
            <Route path="/orders/:id" element={<MyOrders />} />
            <Route path="addresses" element={<Addresses />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
