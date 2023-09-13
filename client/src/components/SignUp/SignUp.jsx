import React, {useState} from 'react';



const SignUp=()=> {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    return (
        <div id='signup'>
            <h1>SignUp</h1>
            <div className="signup-form">
                <div className="subform">
                    <label htmlFor='email'>Email:</label>
                    <input
                        onChange={(e)=>{
                            setEmail(e.target.value);
                        }}
                        type="text"
                        placeholder="Your Email"
                        name="email"
                        />

                </div>
                <div className="subform">
                    <label htmlFor='password'>Password:</label>
                    <input
                        onChange={(e)=>{
                            setPassword(e.target.value);
                        }}
                        type="password"
                        placeholder="Your Password"
                        name="password"
                    />
                </div>
                <button
                    type="submit"
                    id="test"
                    onClick={async()=>{

                        const response=await fetch('http://localhost:3000/signup',{
                            method:"POST",
                            body:JSON.stringify({
                            email: email,
                            password:password,

                       }),

                    });
                    const json=await response.json();//extract json from response
                    console.log(json);
                    }}
                    >SIGN UP</button>
            </div>
        </div>

    );
}

export default SignUp;