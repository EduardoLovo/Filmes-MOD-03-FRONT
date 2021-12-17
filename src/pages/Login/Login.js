import React from 'react';
import './Login.css';

export const Login = () => {
    return (
        <div className='loginBody'>
            <h1>Login</h1>
            <input type='text' placeholder='Email'></input>
            <input type='text' placeholder='senha'></input>
            <button>Login</button>
        </div>
    )
}
