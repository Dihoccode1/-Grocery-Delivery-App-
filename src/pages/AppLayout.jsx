import React from "react";
import { Outlet } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import NavBar from "../components/NavBar/NavBar";

const AppLayout = () => {
  return (
    <>
      <Banner />
      <NavBar />
      <main className="max-h-screen">
        <Outlet />
      </main>
      <p>footer</p>
      <p>cart sidebar</p>
    </>
  );
};

export default AppLayout;
