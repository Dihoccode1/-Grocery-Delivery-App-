import React from "react";
import { heroSectionData } from "../../../assets/image/assets";
const LeftSide = () => {
  return (
    <div className="hidden lg:flex lg:w-1/2 bg-app-green items-center justify-center">
      <img
        src={heroSectionData.hero_image}
        alt="hero"
        className="absolute inset-0 object-cover h-full bg-center opacity-10"
      />

      <div className="relative text-center px-12">
        <h2 className="text-4xl font-semibold text-white mb-4">
          {" "}
          Welcome to Duy Store
        </h2>
        <p className="text-white/60 font-serif text-xl max-w-sm mxau">
          Fresh groceries delivered to your doorstep
        </p>
      </div>
    </div>
  );
};

export default LeftSide;
