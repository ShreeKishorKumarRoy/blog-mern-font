import React, { useState } from 'react'
import axios from 'axios';
import "./signup.css"
import { useNavigate, Link } from 'react-router-dom'
const SignUp = () => {
  const [first_name, setfirst_name] = useState('');
  const [last_name, setlast_name] = useState('');
  const [age, setage] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [profile_pic, setprofile_pic] = useState('');
  const [bio, setbio] = useState('');

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Kishor")
    axios.post('http://127.0.0.1:3000/api/v1/users', {

      first_name: first_name,
      last_name: last_name,
      age: age,
      email: email,
      password: password,
      profile_pic: profile_pic,
      bio: bio,
    }).then(() => {
      console.log("HII");
      navigate('/Login')


    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <div className='addUser'>
      <h3>Sign Up</h3>
      <form className='addUserForm' onSubmit={handleSubmit}>
        <div className='inputGroup'>
          <label htmlFor="fname"> First Name :</label>
          <input type="text" id="fname" autoComplete='off' className='form-control' onChange={(e) => setfirst_name(e.target.value)} placeholder='Enter your first name' />

          <label htmlFor="lname">Last Name :</label>
          <input type="text" id="lname" autoComplete='off' className='form-control' onChange={(e) => setlast_name(e.target.value)} placeholder='Enter your last name' />


          <label htmlFor="email">Email :</label>
          <input type="email" id="email" autoComplete='off' className='form-control' onChange={(e) => setemail(e.target.value)} placeholder='Enter your email' />

          <label htmlFor="password">Password :</label>
          <input type="password" id="password" autoComplete='off' className='form-control' onChange={(e) => setpassword(e.target.value)} placeholder='Enter your password' />

          <button type="submit" class="btn btn-success">Sign Up</button>
        </div>

      </form>
      <div className='login'>
        <p>Already have an account ?</p>
        <Link to="/Login" type="submit" class="btn btn-primary">
          Login
        </Link>
      </div>

    </div>
  )
}

export default SignUp
