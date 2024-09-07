import React, { useState } from "react";

import { MdEmail } from "react-icons/md";
import { MdPerson } from "react-icons/md";
import { MdLock } from "react-icons/md";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

const Login = () => {

    const [state, dispatch] = useStateValue();

  const [action, setAction] = useState("Sign Up");


  const signIn = () =>{
auth
.signInWithPopup(provider)
.then(result =>{
    dispatch({
        type: actionTypes.SET_USER,
        user: result.user,
    })
    console.log(result)
}).catch(error=>alert(error.message));
  }
  return (
    <div className="container">
      <div className="">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <MdPerson />
            <input type="text" placeholder="Name" />
          </div>
        )}

        <div className="input">
          <MdEmail />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <MdLock />
          <input type="password" placeholder="password" />
        </div>
      </div>
      
      {action==="Sign Up"?<div></div>:<div className="forgot-password">
        Lost Password? <span>Click Here</span>
      </div>}
      <div className="submit-container">
        <div 
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Sign Up");
            signIn();
          }}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Login");
            signIn()
          }}
        >
          Login{" "}
        </div>
      </div>
    </div>
  );
};

export default Login;
