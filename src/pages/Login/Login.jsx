import React, { useState } from "react";
import { BikeIcon } from "lucide-react";
import { Link } from "react-router-dom";
import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSide";

const Login = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  };
  return (
    <div className="min-h-screen flex">
      {/* left side */}
      <LeftSide />
      {/* right side */}
      <RightSide />
    </div>
  );
};

export default Login;
