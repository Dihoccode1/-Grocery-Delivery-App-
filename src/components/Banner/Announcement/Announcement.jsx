import React from "react";
import { ZapIcon } from "lucide-react";
const Announcement = () => {
  return (
    <div className="hidden sm:flex items-center gap-2">
      <ZapIcon className="size-3.5 fill-yellow-400 text-yellow-400 shrink-0" />
      <span>Farm-fresh produce delivered daily</span>
    </div>
  );
};

export default Announcement;
