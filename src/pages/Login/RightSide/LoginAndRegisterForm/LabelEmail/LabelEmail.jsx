import { MailIcon } from "lucide-react";
import React from "react";
const LabelEmail = ({ email, setEmail, isLogin }) => {
  return (
    <label className="text-sm flex flex-col gap-1:">
      Email Address
      <div className="relative">
        <MailIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-app-text-light" />
        <input
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
          placeholder="you@example.com"
          className="w-full pl-11 pr-4 py- text-sm bg-white rounded-xl border not-focus:bg-app-border transition-all"
        />
      </div>
    </label>
  );
};

export default LabelEmail;
