import { useState } from "react";
import "./LoginSignup.css";

import email_icon from "../../Components/assets/email.png";
import password_icon from "../../Components/assets/password.png";
import person_icon from "../../Components/assets/person.png";

export default function LoginSignup() {

    const[action, setAction] = useState("Sign Up");

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={person_icon} alt="" />
          <input type="text" placeholder="Name" />
        </div>
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Email"/>
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="Password"/>
        </div>
      </div>
      <div className="forgot-password">Lost Password? <span>Click here</span></div>
      <div className="submit-container">
        <div className={action === 'Login' ? 'submit gray' : 'submit'}>Sign Up</div>
        <div className={action === 'Sign Up' ? 'submit gray' : 'submit'}>Login</div>
      </div>
    </div>
  );
}
