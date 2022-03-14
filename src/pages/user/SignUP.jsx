import React, { useState } from 'react';
import { Form, Button, Toast } from 'react-bootstrap'
import { Link } from "react-router-dom";
import { AiOutlineUser, AiOutlineArrowRight } from "react-icons/ai";
import "../../style/login.css"
import axios from 'axios';


function SignUp() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alert, setAlert] = useState('');
    const [error, setError] = useState('');


    function handleSubmit() {
        const data = { username, email, password }
        axios.post('https://peaceful-citadel-71310.herokuapp.com/signup', data)
            .then((data) => {
                // console.log(data);
                if (data) {
                    if (data.data) {
                        setUsername('')
                        setEmail('')
                        setPassword('')
                        setAlert(data.data.message)
                        setTimeout(() => {
                            setAlert('')
                        }, 3000);
                    }
                }
            })
            .catch((err) => {
                // console.log(err.response.data.message);
                setError(err.response.data.message)
            })

    }

    return (<>
        <section className="ftco-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-5">
                        <div className="login-wrap p-4 p-md-5">
                            <div className="icon d-flex align-items-center justify-content-center">
                                <div className='text-white'><AiOutlineUser /></div>
                            </div>
                            <h3 className="text-center mb-4">Sign Up</h3>
                            {
                                error && (
                                    <Toast className="d-inline-block m-1" bg="danger">
                                        <Toast.Body className='danger text-white'>
                                            {error}
                                        </Toast.Body>
                                    </Toast>
                                )
                            }
                            {
                                alert && (
                                    <Toast>
                                        <Toast.Header>
                                            <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                                            <strong className="me-auto">Sign Up Todo LIst</strong>
                                            {/* <small>11 mins ago</small> */}
                                        </Toast.Header>
                                        <Toast.Body>{alert}</Toast.Body>
                                    </Toast>
                                )
                            }
                            <Form className="login-form">
                                <div className="form-group">
                                    <Form.Control type="txt" className="form-control rounded-left" placeholder="Username" autoComplete='off' onChange={e => { setUsername(e.target.value) }} value={username} required />
                                </div>
                                <div className="form-group">
                                    <Form.Control type="email" className="form-control rounded-left" placeholder="Email" autoComplete='off' onChange={e => { setEmail(e.target.value) }} value={email} required />
                                </div>
                                <div className="form-group d-flex">
                                    <Form.Control type="password" className="form-control rounded-left" placeholder="Password" onChange={e => { setPassword(e.target.value) }} value={password} required />
                                </div>
                                <div className="form-group d-md-flex">
                                    <div className="w-50">
                                        <p className='text-md-black-50 fs-6 fst-italic'></p>
                                    </div>
                                    <div className="w-50 text-md-right">
                                        <p><Link to="/">Sign in <AiOutlineArrowRight /> </Link></p>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <Button className="btn btn-primary rounded submit p-3 px-5" onClick={handleSubmit}> SignUp </Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>);
}

export default SignUp;
