import React, { useState } from "react";
import { TruckIcon, XIcon, ZapIcon } from "lucide-react";
import Notice from "./Notice/Notice";
import Announcement from "./Announcement/Announcement";

const Banner = () => {
  const [bannerVisible, setBannerVisible] = useState(() => {
    return sessionStorage.getItem(`banner_dismissed`) !== "true";
  });

  const dismissBanner = () => {
    setBannerVisible(false);
    sessionStorage.setItem(`banner_dismissed`, "true");
  };

  // Nếu không hiển thị, trả về null để không render gì cả
  if (!bannerVisible) return null;

  return (
    <div className="bg-linear-to-r from-app-green via-emerald-800 to-app-green text-white text-xs sm:text-sm relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center  justify-center gap-6">
        <Notice />
        <span className="hidden sm:inline  text-white/40 ">|</span>
        <Announcement />
      </div>

      <button
        onClick={dismissBanner}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-white/10 rounded-full transition-colors"
      >
        <XIcon className="size-3.5" />
      </button>
    </div>
  );
};

export default Banner;
