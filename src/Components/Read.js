import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function Read() {
    const [apiData, setapiData] = useState([])
    function getData() {
        axios.get('http://127.0.0.1:3000/api/v1/users')
            .then((response) => {
                console.log(response);
                console.log("Hi");
                setapiData(response.data.data.users);
                console.log(response.data.data.users);


            }).catch((response) => {
                console.log("Hello");
            })
    }
    function handleDelete(user_id) {
        console.log(user_id);
        axios.delete(`http://127.0.0.1:3000/api/v1/users/${user_id}`)
            .then(() => {
                getData();
            }).catch((err) => {
                console.log(err)
            })

    }
    function setDataToStorage(id, name, age, email) {
        localStorage.setItem('id', id);
        localStorage.setItem('name', name);
        localStorage.setItem('age', age);
        localStorage.setItem('email', email);
    }
    useEffect(() => {
        getData();
    }, [])

    return (
        <div className='row'>
            <div className='col-md-12'>
                <div className='mb-2 mt-2'>
                    <Link to='/create'>
                        <button className='btn btn-primary'>Create New Data</button>

                    </Link>
                </div>
                <table className='table table-bordered table-striped table-light table-hover'>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>AGE</th>
                            <th>BIO</th>

                            <th>Profile Pic</th>
                            <th>Email</th>
                            <th>Password</th>


                            <th>EDIT</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            apiData.map((item) => {
                                return (
                                    <>
                                        <tr>
                                            <td>{item.first_name}</td>
                                            <td>{item.last_name}</td>
                                            <td>{item.age}</td>
                                            <td>{item.bio}</td>
                                            <td>{item.profile_pic}</td>
                                            <td>{item.email}</td>
                                            <td>{item.password}</td>


                                            <td>
                                                <Link to='/edit'>
                                                    <button className='btn btn-primary' onClick={() => setDataToStorage(item.id, item.e_name, item.e_age, item.e_email)}>Edit</button>

                                                </Link>
                                            </td>
                                            <td>
                                                <button className='btn btn-danger' onClick={() => { if (window.confirm('Are You Sure to Delete Data ?')) { handleDelete(item._id) } }}>Delete</button>
                                            </td>
                                        </tr>
                                    </>
                                )

                            })
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Read
