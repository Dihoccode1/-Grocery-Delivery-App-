import { Loader2Icon } from "lucide-react";
import React from "react";

const SignInButton = ({ loading, setLoading, isLogin }) => {
  return (
    <button
      className="flex-center w-full py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-900 transition-colors disabled:opacity-50"
      type="submit"
      disabled={loading}
    >
      {loading ? <Loader2Icon /> : isLogin ? "Sign in" : "Sign up"}
    </button>
  );
};

export default SignInButton;
