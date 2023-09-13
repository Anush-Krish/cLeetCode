import React,{useState} from "react";

const LogIn=()=>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    return(
        <div id="login">
            <h1>Log In</h1>
            <div className="login-form">
                <div className="subform">
                    <label htmlFor="email">Email:</label>
                    <input
                        onChange={(e)=>{
                            setEmail(e.target.value);
                        }

                    }
                        type="text"
                        placeholder="Your Email:"
                        name="email"
                    />
                </div>
                <div className="subform">
                    <label htmlFor="password">Password:</label>
                    <input
                        onChange={(e)=>{
                            setPassword(e.target.value);
                        }
                    }
                        type="password"
                        placeholder="Your Password"
                        name="password"
                        />
                </div>
                <button type="submit"
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
                        >Sign In</button>
            </div>
        </div>
    )
}
export default LogIn;