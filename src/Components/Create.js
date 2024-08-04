import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';

function Create() {
    const [first_name, setfirst_name] = useState('');
    const [last_name, setlast_name] = useState('');
    const [age, setage] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [profile_pic, setprofile_pic] = useState('');
    const [bio, setbio] = useState('');
    const [created_at, setcreated_at] = useState('');
    const [is_active, setis_active] = useState('');

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
            navigate('/')


        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <>
            <div className='row mt-2'>
                <div className='col-md-4'>
                    <div className='mb-2 mt-2'>
                        <Link to='/'>
                            <button className='btn btn-primary'>Read Data</button>
                        </Link>
                    </div>
                    <div className='bg-primary p-4 text-center'>
                        <h1>Create Data</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <lebel>Enter First Name :</lebel>
                            <input type='text' placeholder='First Name' className='form-control' onChange={(e) => setfirst_name(e.target.value)} />
                        </div>
                        <div className='form-group'>
                            <lebel>Enter Last Name :</lebel>
                            <input type='text' placeholder='Last Name' className='form-control' onChange={(e) => setlast_name(e.target.value)} />
                        </div>
                        <div className='form-group'>
                            <lebel>Enter age :</lebel>
                            <input type='number' placeholder='Age' className='form-control' onChange={(e) => setage(e.target.value)} />
                        </div>

                        <div className='form-group'>
                            <lebel>Enter Email :</lebel>
                            <input type='email' placeholder='Email' className='form-control' onChange={(e) => setemail(e.target.value)} />
                        </div>
                        <div className='form-group'>
                            <lebel>Enter Password :</lebel>
                            <input type='password' placeholder='password' className='form-control' onChange={(e) => setpassword(e.target.value)} />
                        </div>
                        <div className='form-group'>
                            <lebel>Enter Bio :</lebel>
                            <input type='text' placeholder='Bio' className='form-control' onChange={(e) => setbio(e.target.value)} />
                        </div>

                        <br />
                        <div className='d-grid'>
                            <input type='submit' value='submit' className='btn btn-primary' />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Create
