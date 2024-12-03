"use client";

import React, { useState } from "react";
import LoginForm from "./login";
import SignupForm from "./signup";

export default function LoginMain() {
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");

  return (
    <div>
    <div className="Container">

      <img src="/Logo.svg" alt="logo" className="logo" />

        <h2 className="text">Welcome to our school</h2>
     
        <p className="textp">Log in or create account</p>

        <div className="loginsignup">
            
            <div className={`login ${activeTab === "login" ? "white" : ""}`}
            onClick={() => setActiveTab("login")}><p>Login</p></div>

            <div className={`signup ${activeTab === "signup" ? "white" : ""}`}
            onClick={() => setActiveTab("signup")}><p>Signup</p></div>

        </div>

        {activeTab === "login" ? <LoginForm /> : <SignupForm />}



        <button className="submit"><p>Login</p></button>
    </div>  

    </div>


  );
}