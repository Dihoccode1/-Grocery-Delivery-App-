import { LockIcon } from "lucide-react";
import React from "react";

const LabelPassword = ({ password, setPassword }) => {
  return (
    <label className="text-sm flex flex-col gap-1:">
      Password
      <div className="relative">
        <LockIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-app-text-light" />
        <input
          type="text"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
          placeholder="............"
          className="w-full pl-11 pr-4 py- text-sm bg-white rounded-xl border not-focus:bg-app-border transition-all"
        />
      </div>
    </label>
  );
};

export default LabelPassword;
