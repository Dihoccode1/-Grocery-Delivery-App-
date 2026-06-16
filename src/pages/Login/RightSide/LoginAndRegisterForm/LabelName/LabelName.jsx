import React from "react";
import { UserIcon } from "lucide-react";

const LabelName = ({ name, setName, isLogin }) => {
  return (
    <label className="text-sm flex flex-col gap-1:">
      Name
      <div className="relative">
        <UserIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-app-text-light" />
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
          placeholder="Enter your name"
          className="w-full pl-11 pr-4 py- text-sm bg-white rounded-xl border not-focus:bg-app-border transition-all"
        />
      </div>
    </label>
  );
};

export default LabelName;
