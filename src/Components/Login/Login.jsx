import React, { useState } from 'react';
import "./login.css"
import { Link } from 'react-router-dom'
import axios from 'axios';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const handleLogin = async (e) => {
        e.preventDefault();
        console.log('Login attempt with:', { email, password });
        try {
            console.log("Before hit");
            const response = await axios.post('http://127.0.0.1:3000/api/v1/auth/login', {
                email,
                password,
            });
            console.log(response);
            // Assuming the API returns a token
            const token = response.data.data.token;
            console.log(token);
            console.log("Hi");

            // Save token to local storage
            localStorage.setItem('authToken', token);
            console.log(localStorage.authToken)

            // Redirect or update UI
            window.location.href = '/Read'; // Example redirect
        } catch (err) {
            setError('Login failed. Please check your credentials.');
        }
    };

    return (
        <div className='addUser'>
            <h3>Login In</h3>
            <form className='addUserForm' onSubmit={handleLogin}>
                <div className='inputGroup'>
                    <label htmlFor="email">Email :</label>
                    <input type="email" id="email" value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required className='form-control' placeholder='Enter your email' />

                    <label htmlFor="password">Password :</label>
                    <input type="password" id="password" value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required className='form-control' placeholder='Enter your password' />

                    <button type="submit" class="btn btn-success">Login</button>
                </div>

            </form>
            {error && <p>{error}</p>}
            <div className='login'>
                <p>Don't have any account ?</p>
                <Link to="/" type="submit" class="btn btn-primary">
                    Sign up
                </Link>
            </div>

        </div>
    )
}

export default Login
