import React, { useState } from 'react';
import {
    Container, Row, Button,
    Card, Form, FloatingLabel,
    InputGroup, Toast, ToastContainer, Alert
} from "react-bootstrap"
import DatePicker from 'react-date-picker';
import Navbar from "../../components/navbar/Header"
import Footer from "../../components/footer/Footer"
import axios from 'axios'


function CreateTodo() {
    const [title, setTitle] = useState('')
    const [dudate, setDudate] = useState(new Date())
    const [desc, setDesc] = useState('')
    const [alert, setAlert] = useState('');
    const [error, setError] = useState(false);


    const getToken = localStorage.getItem('token')

    // console.log(title, dudate, desc);

    function handleSubmit() {
        const data = { title, due_date: dudate, description: desc }
        axios.post('https://peaceful-citadel-71310.herokuapp.com/todo', data, {
            headers: { 'token': getToken }
        })
            .then((data) => {

                console.log(data);
                if (data) {
                    if (data.data) {
                        setTitle('')
                        setDudate('')
                        setDesc('')
                        setAlert(data.data.message)
                        setTimeout(() => {
                            setAlert('')
                        }, 5000);
                    }
                }
            })
            .catch((err) => {
                // console.log(err.response.data.message);
                setError(err.response.data.message)
            })

    }

    return <>
        <Navbar />
        <Container>
            <Row className='mt-5'>
                <div className="mb-2" onClick={() => { window.location.href = "/home" }}>
                    <Button className='btn-add'>
                        Back
                    </Button>{' '}
                </div>
            </Row>
            <Container fluid="md">
                <Row className='mt-2 flex '>
                    <Card style={{ width: '40rem' }} className="shadow">
                        <Card.Header className='fw-bold fs-4'>Create Todo</Card.Header>
                        <Card.Body>
                            {
                                error && (
                                    <Alert variant="danger" onClose={() => { setError(false) }} dismissible>
                                        <Alert.Heading className='fs-6'>{error}</Alert.Heading>
                                    </Alert>
                                )
                            }
                            <Form>
                                <FloatingLabel controlId="floatingInput" label="Title Todo" className="mb-3" >
                                    <Form.Control type="text" placeholder='Title Todo' value={title} onChange={e => { setTitle(e.target.value) }} autoComplete="off" />
                                </FloatingLabel>
                                <div>
                                    <InputGroup className="mb-3" hasValidation>
                                        <InputGroup.Text>Due Date</InputGroup.Text>
                                        <DatePicker onChange={setDudate} minDate={new Date()} value={dudate} />
                                    </InputGroup>
                                </div>
                                <FloatingLabel controlId="floatingTextarea2" label="Description">
                                    <Form.Control as="textarea" placeholder="Description" style={{ height: '100px' }} value={desc} onChange={e => { setDesc(e.target.value) }} />
                                </FloatingLabel>
                                <Card.Body className='text-center'>
                                    <div className=" ">
                                        <Button className="btn btn-primary rounded submit p-3 px-5" onClick={handleSubmit}> Create </Button>
                                    </div>
                                </Card.Body>
                            </Form>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
            {alert && (
                <ToastContainer className="p-3" position="top-end">
                    <Toast bg="Success" >
                        <Toast.Header closeButton={false}>
                            <strong className="me-auto">Success</strong>
                            <small></small>
                        </Toast.Header>
                        <Toast.Body>{alert}</Toast.Body>
                    </Toast>
                </ToastContainer>
            )}
        </Container>


        <Footer />
    </>;
}

export default CreateTodo;
