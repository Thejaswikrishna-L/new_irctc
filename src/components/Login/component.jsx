import React, { useState } from "react";
import "./styles.scss";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="login-container">
      <h2>{isLogin ? "Login" : "Signup"}</h2>
      <form>
        {!isLogin && <input type="text" placeholder="Full Name" required />}
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">{isLogin ? "Login" : "Signup"}</button>
      </form>
      <p onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Don't have an account? Signup" : "Already have an account? Login"}
      </p>
    </div>
  );
};

export default LoginSignup;
