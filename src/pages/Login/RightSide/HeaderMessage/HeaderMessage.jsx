import React from "react";
import { BikeIcon } from "lucide-react";
import { Link } from "react-router-dom";
const HeaderMessage = ({ isLogin, setIsLogin }) => {
  return (
    <div className="text-center mb-8 ">
      <Link to="/" className="inline-flex items-center gap-2 mb-6">
        <BikeIcon className="size-8 text-app-green" />
        <span className="text-2xl font-semibold text-app-green">Duy Store</span>
      </Link>
      <h1 className="text-center font-semibold to-app-green mb-2">
        {isLogin ? "Sign in to your account" : "Sign up for an account"}
      </h1>
      <p className="text-sm to-app-text-light ">
        {isLogin ? "Don't have an account?" : "Already have an account?"}
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="text-app-orange ml-1 font-semibold hover:text-orange-600 transition-colors"
        >
          {isLogin ? "Create one" : "Sign in"}
        </button>
      </p>
    </div>
  );
};

export default HeaderMessage;
