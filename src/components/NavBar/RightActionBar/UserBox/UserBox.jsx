import React from "react";
import {
  ChevronDownIcon,
  Link,
  MenuIcon,
  ShoppingCartIcon,
  UserIcon,
  XIcon,
} from "lucide-react";
const UserBox = ({ user, setUserMenuOpen, userMenuOpen }) => {
  return (
    <div className="relative">
      {user ? (
        <button className="flex items-center g2 p-2">
          <div className="size-7 rounded-full bg-gray-950 text-white flex items-center justify-center gap-1">
            {user.name.charAt(0).toUpperCase()}
          </div>
          <ChevronDownIcon className="size-3  " />
        </button>
      ) : (
        <div className="flex items-center justify-center gap-2">
          <Link
            to="/login"
            className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-green-950 rounded-full hover:bg-green-950-light transition-colors"
          >
            <UserIcon size={16} />
            Sign In
          </Link>
          {userMenuOpen ? (
            <XIcon
              className="md:hidden"
              onClick={() => {
                setUserMenuOpen(!userMenuOpen);
              }}
            />
          ) : (
            <MenuIcon
              className="md:hidden"
              onClick={() => {
                setUserMenuOpen(!userMenuOpen);
              }}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default UserBox;
