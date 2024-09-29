import React from 'react'
// import {Form, Input, Button} from "antd";

function Login() {
    return (
        <div className="loginPage">
            <h1>Log in</h1>
            <div className="loginForm">
                <input type="email" className="loginEmail" placeholder="Your email"/>
                <input type="password" className="loginPassword" placeholder="Your password"/>
                <button className="loginButton">Log in</button>
            </div>
        </div>
    );
}

export default Login;