import React from "react";
import "./Login.css"
import {Button} from "@material-ui/core";
import {auth, provider} from "./firebase";

function Login(){
    const signIn = (event) =>{
        auth.signInWithPopup(provider).catch((error)=>alert(error.message));
    };
    return(
        <div className="login">
            <h2>I am the login page</h2>
            <div className="login_logo">
              <img
                  src="https://www.designyourway.net/blog/wp-content/uploads/2019/11/discord-logo.jpg"
                  alt="" />
            </div>
            <button onClick={signIn}>Sign In</button>
        </div>
    )
}
export default Login;