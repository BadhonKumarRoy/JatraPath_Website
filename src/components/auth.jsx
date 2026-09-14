import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { supabase } from "../lib/supabaseClient";

import "../styles/components/auth.css";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();

  const form = new FormData(e.target);

  const email = form.get("email");
  const password = form.get("password");

  // Registration
  if (!isLogin) {
    const name = form.get("name");
    const confirmPassword = form.get("confirm_password");

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          name: name,
        },
      },
    });

    if (error) {
      console.error("Registration error:", error);
      alert(error.message);
      return;
    }

    console.log("REGISTERED USER:", data.user);

    alert("Registration Success");

    setIsLogin(true);
    return;
  }

  // Login
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) {
    console.error("Login error:", error);
    alert(error.message);
    return;
  }

  console.log("LOGGED IN USER:", data.user);

  localStorage.setItem("user", JSON.stringify(data.user));

  alert("Login Success");

  navigate("/user");
};

  return (
    <div className="auth-wrapper">
      <div className="auth-card">

        <div className="auth-header">
          <h2>{isLogin ? "Welcome Back" : "Create Account"}</h2>
          <p>
            {isLogin
              ? "Login to continue your journey"
              : "Join JatraPath today"}
          </p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>

          {!isLogin && (
            <input type="text" name="name" placeholder="Full Name" required />
          )}

          <input type="email" name="email" placeholder="Email Address" required />

          <input type="password" name="password" placeholder="Password" required />

          {!isLogin && (
            <input
              type="password"
              name="confirm_password"
              placeholder="Confirm Password"
              required
            />
          )}

          <button type="submit">
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        <p className="toggle-text">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? " Sign up" : " Login"}
          </span>
        </p>
        <Link to="/" className="home-link">
          ⬅ Back to Home
        </Link>

      </div>
    </div>
  );
};

export default Auth;