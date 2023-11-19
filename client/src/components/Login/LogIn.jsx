import React,{useState} from "react";
import '@material/web/textfield/filled-text-field.js';
import '@material/web/button/filled-tonal-button.js';

import './Login.css'
const LogIn=()=>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    return(
        <div id="login">
            <h1 align="center">Sign In</h1>
            <div className="login-form">

                <div className="subform" >
                    <md-filled-text-field
                        label="Email"
                        supporting-text="Enter email"
                        onChange={(e)=>{
                            setEmail(e.target.value);
                        }}
                        type="text"
                    >
                    </md-filled-text-field>
                    &ensp;
                    <md-filled-text-field
                        label="Password"
                        supporting-text="Enter Password"
                        onChange={(e)=>{
                            setPassword(e.target.value);
                        }}
                        type="password"
                    >
                    </md-filled-text-field>
                </div>
                <div className="button" align="center">
                <md-filled-button

                        type="submit"
                        id="test"
                        onClick={async()=>{
                            const response=await fetch("http://localhost:3000/login",{
                                method:"POST",
                                body:JSON.stringify({
                                    email:email,
                                    password:password
                                }),
                            })

                        const json=await response.json();
                        localStorage.setItem("token",json.token);
                }}
                        >Sign In</md-filled-button>
            </div>
            </div>

        </div>
    )
}
export default LogIn;