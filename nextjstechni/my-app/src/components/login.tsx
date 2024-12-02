"use client";

import React, { useState } from "react";
import LoginForm from "./login";
import SignupForm from "./signup";



export default function LoginMain() {
  const [activeTab, setActiveTab] = useState("login");

  return (
   
        <div className="loginform">
            <div className="inputs">

 
                <p>Email</p>
                <div className="input">
                 
                    <input type="email" placeholder="Email"/>
                </div>

                <p>Password</p>
                <div className="input">
                  
                    <input type="password" placeholder="Password" />
                </div>

            </div>

        </div>

    


  );
}