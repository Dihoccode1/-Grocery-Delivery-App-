import { SearchIcon } from "lucide-react";
import React from "react";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  // Ngăn chặn reload trang khi nhấn Enter
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      className="hidden sm:flex flex-1 max-w-sm text-xs sm:text-sm"
      onSubmit={handleSubmit}
    >
      <div className="relative w-full">
        <SearchIcon className="absolute left-2.5 top-1/2 -translate-y-1/2 size-4 text-zinc-500" />
        <input
          type="text"
          placeholder="Search for groceries..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          aria-label="Search groceries"
          className="w-full pl-8 p-2 bg-orange-50 rounded-full ring ring-app-border/15 focus:ring-app-border/30 focus:outline-none"
        />
      </div>
    </form>
  );
};

export default SearchBar;
