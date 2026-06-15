import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <p>banner</p>
      <p>navbar</p>
      <main className="max-h-screen">
        <Outlet />
      </main>
      <p>footer</p>
      <p>cart sidebar</p>
    </>
  );
};

export default AppLayout;
