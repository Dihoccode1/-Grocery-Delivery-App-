import { UserIcon } from "lucide-react";
import React from "react";
import LabelName from "./LabelName/LabelName";
import LabelEmail from "./LabelEmail/LabelEmail";
import LabelPassword from "./LabelPassword/LabelPassword";
import SignInButton from "./SignInButton/SignInButton";

const LoginAndRegisterForm = ({
  handleSubmit,
  isLogin,
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  loading,
  setLoading,
}) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {isLogin && (
        <>
          <LabelName name={name} setName={setName} isLogin={isLogin} />
          <LabelEmail email={email} setEmail={setEmail} />
          <LabelPassword password={password} setPassword={setPassword} />
        </>
      )}
      <SignInButton
        loading={loading}
        setLoading={setLoading}
        isLogin={isLogin}
      />
    </form>
  );
};

export default LoginAndRegisterForm;
