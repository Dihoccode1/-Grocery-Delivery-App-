import {
  ChevronDownIcon,
  Link,
  MenuIcon,
  ShoppingCartIcon,
  UserIcon,
  XIcon,
} from "lucide-react";
import React from "react";
import UserBox from "./UserBox/UserBox";

const RightActionBar = ({
  cartCount,
  setIsCartOpen,
  user,
  setUserMenuOpen,
  userMenuOpen,
}) => {
  return (
    <div className="flex items-center gap-3">
      {/* Cart */}
      <button
        className="relative p-2 rounded-full gap-3"
        onClick={() => {
          setIsCartOpen(true);
        }}
      >
        <ShoppingCartIcon className="size-5 text-zinc-900" />
        {cartCount > 0 && (
          <span className="absolute -top-1 -right-1 size-4 bg-app-orange text-white text-[10px] rounded-full flex items-center justify-center">
            {cartCount}
          </span>
        )}
      </button>
      {/*User  */}
      <UserBox
        user={user}
        setUserMenuOpen={setUserMenuOpen}
        userMenuOpen={userMenuOpen}
      />
    </div>
  );
};

export default RightActionBar;
