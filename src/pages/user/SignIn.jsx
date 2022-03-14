import React, { useState, Fragment } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { Form, Button, Toast } from 'react-bootstrap'
import { AiOutlineUser } from "react-icons/ai";
import ReactLoading from 'react-loading';
import "../../style/login.css"
import axios from 'axios'


function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('');
  const [redirect, setRedirect] = useState(false);

  const navigate = useNavigate()

  function handleSubmit() {
    const body = { email, password }
    setLoading(true)

    axios.post('https://peaceful-citadel-71310.herokuapp.com/signin', body)
      .then(({ data }) => {
        // console.log(data);
        localStorage.setItem('token', data.token)
        setRedirect('true')
        // setAlert(data.data.message)


      })
      .catch(err => {
        // console.log(err.response.data['message']);
        setError(err.response.data.message)


      })
      .finally(() => {
        setLoading(false)
      })
  }

  if (loading) {

    return <div className='row justify-content-center'>
      <ReactLoading type="bars" color="#8B458C" height={200} width={200} />
    </div>
  }

  return <>
    <Fragment>
      {
        redirect && (
          navigate('/home', { replace: true })
        )
      }
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-5">
              <div className="login-wrap p-4 p-md-5">
                <div className="icon d-flex align-items-center justify-content-center">
                  <div className='text-white'><AiOutlineUser /></div>
                </div>
                <h3 className="text-center mb-4">Have an account?</h3>
                {
                  error && (
                    <Toast className="d-inline-block m-1" bg="danger">
                      <Toast.Body className='danger text-white'>
                        {error}
                      </Toast.Body>
                    </Toast>
                  )
                }

                <Form className="login-form">
                  <div className="form-group">
                    <Form.Control type="email" className="form-control rounded-left" placeholder="Email" autoComplete='off' onChange={e => { setEmail(e.target.value) }} required />
                  </div>
                  <div className="form-group d-flex">
                    <Form.Control type="password" className="form-control rounded-left" placeholder="Password" required onChange={(e) => { setPassword(e.target.value) }} />
                  </div>
                  <div className="form-group d-md-flex">
                    <div className="w-50">
                      <p className='text-md-black-50 fs-6 fst-italic'><Link to="/signup">Sign Up?</Link></p>
                    </div>
                    <div className="w-50 text-md-right">
                      {/* <p>Forgot Password</p> */}
                    </div>
                  </div>
                  <div className="form-group">
                    <Button className="btn btn-primary rounded submit p-3 px-5" onClick={handleSubmit}> Get Started </Button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  </>;
}

export default SignIn;
