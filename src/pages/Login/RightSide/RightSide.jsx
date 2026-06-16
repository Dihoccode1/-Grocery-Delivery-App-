import React, { useState } from "react";
import { BikeIcon } from "lucide-react";
import { Link } from "react-router-dom";
import HeaderMessage from "./HeaderMessage/HeaderMessage";
import LoginAndRegisterForm from "./LoginAndRegisterForm/LoginAndRegisterForm";

const RightSide = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {};
  return (
    <div className="flex-1 flex-center px-4 py-12 bg-app-cream">
      <div className="w-full max-w-md ">
        {/* header message */}
        <HeaderMessage isLogin={isLogin} setIsLogin={setIsLogin} />
        {/* Login and Register form */}
        <LoginAndRegisterForm
          handleSubmit={handleSubmit}
          isLogin={isLogin}
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          loading={loading}
          setLoading={setLoading}
        />
      </div>
    </div>
  );
};

export default RightSide;
