import React from "react";
import { TruckIcon, XIcon } from "lucide-react";
const Notice = () => {
  return (
    <div className="flex justify-center items-center gap-2">
      <TruckIcon className="size4 shrink-0 " />
      <span className="font-medium"> Free delivery on orders above $36</span>
    </div>
  );
};

export default Notice;
