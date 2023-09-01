import logo from "./logo.svg";
import "./App.css";
import React, {useState} from "react";
import Mini from "./Components/Mini/Mini";
import LoginSignUp from "./Components/LoginSignUp/LoginSignUp";
import user_icon from "./Components/Assets/person.jpg";
import emial_icon from "./Components/Assets/email.jpg";
import password_icon from "./Components/Assets/password.jpg";

function App() {
  const [action, setAction] = useState("Sign Up");

  return (
    <div>
      {action === "Log In" ? (
        <Mini />
      ) : (
        <div className="container">
          {action === "Sign Up"}
          <div className="header">
            <div className="text"> {action} </div>
            <div className="line"></div>
          </div>
          <div className="inputs">
            {action === "Log In" ? (
              <div></div>
            ) : (
              <div className="input">
                <img src={user_icon} alt="" />
                <input type="text" placeholder="Name" />
              </div>
            )}

            <div className="input">
              <img src={emial_icon} alt="" />
              <input type="email" placeholder="E-Mail" />
            </div>
            <div className="input">
              <img src={password_icon} alt="" />
              <input type="password" placeholder="Password" />
            </div>
          </div>
          {action === "Sign Up" ? (
            <div></div>
          ) : (
            <div className="forgot">
              Forgot Password <span>Click Here</span>
            </div>
          )}
          <div className="submit-con">
            <div
              className={action === "Log In" ? "submit gray" : "submit"}
              onClick={() => {
                setAction("Sign Up");
              }}
            >
              Sign Up
            </div>
            <div
              className={action === "Sign Up" ? "submit gray" : "submit"}
              onClick={() => {
                setAction("Log In");
              }}
            >
              Log In
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
