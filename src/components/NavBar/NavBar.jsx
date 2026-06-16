import { BikeIcon } from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MainNav from "./MainNav/MainNav";
import SearchBar from "./SearchBar/SearchBar";
import RightActionBar from "./RightActionBar/RightActionBar";

const NavBar = () => {
  const user = {
    name: `Duy`,
    email: `admin@example.com`,
    isAdmin: true,
  };
  const { cartCount, setIsCartOpen } = {
    cartCount: 5,
    setIsCartOpen: (_data) => {},
  };
  const [searchQuery, setSearchQuery] = useState("");
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-app-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 gap-4">
        {/* logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-[22px] font-medium shrink-0"
        >
          <BikeIcon size={24} /> Duy Store
        </Link>

        <div className="w-full flex items-center justify-end gap-4 lg:gap-10">
          <MainNav />
          {/* Search bar */}
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          {/* Right action */}
          <RightActionBar
            cartCount={cartCount}
            setIsCartOpen={setIsCartOpen}
            user={user}
            userMenuOpen={userMenuOpen}
            setUserMenuOpen={setUserMenuOpen}
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
