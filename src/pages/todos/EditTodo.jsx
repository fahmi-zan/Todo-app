import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import {
    Container, Row, Button,
    Card, Form, FloatingLabel,
    InputGroup, Toast, ToastContainer, Alert
} from "react-bootstrap"
import { useParams } from 'react-router-dom'
import DatePicker from 'react-date-picker';
import moment from 'moment'
import ReactLoading from 'react-loading';
import Navbar from "../../components/navbar/Header"
import Footer from "../../components/footer/Footer"
import axios from 'axios'
import { useEffect } from 'react';

function EditTodo() {

    const [dataTodos, setDataTodos] = useState('')
    const [title, setTitle] = useState('')
    const [dudate, setDudate] = useState('')
    const [desc, setDesc] = useState('')
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState('');
    const [error, setError] = useState(false);

    console.log(title, dudate, desc);

    const getToken = localStorage.getItem('token')
    const params = useParams()

    const posts = useSelector(({ listPost }) => listPost)

    useEffect(() => {
        const findTodos = posts.find((el) => el.id === +params.id)
        setDataTodos(findTodos);
    }, [params, posts])

    function handleSubmit() {
        const data = { title, due_date: dudate, description: desc }
        axios.put('https://peaceful-citadel-71310.herokuapp.com/todo/' + params.id, data, {
            headers: { 'token': getToken }
        })
            .then((data) => {

                console.log(data);
                if (data) {
                    if (data.data) {
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
            .finally(() => {
                setLoading(true)
                setTimeout(() => {
                    setLoading(false)
                }, 2000);
            })
    }
    if (loading) {
        return <main className='align-middle mt-lg-5'>
            <ReactLoading type="bars" color="#8B458C" height={150} width={150} />
        </main>
    }

    if (!dataTodos) {
        return <div className='row justify-content-center align-middle'>
            <ReactLoading type="bars" color="#8B458C" height={150} width={150} />
        </div>
    }
    return (<>
        <Navbar />
        <Container>
            <Row className='mt-5'>
                <div className="mb-2" >
                    <Button className='btn-add' onClick={() => { window.location.href = "/home" }}>
                        Back
                    </Button>
                </div>
            </Row>
            <Container fluid="md">
                <Row className='mt-2 flex '>
                    <Card style={{ width: '40rem' }} className="shadow">
                        <Card.Header className='fw-bold fs-4'>Edit Todo</Card.Header>
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
                                    <Form.Control type="text" placeholder='Title Todo' defaultValue={dataTodos.title} onChange={e => { setTitle(e.target.value) }} autoComplete="off" />
                                </FloatingLabel>
                                <div>
                                    <InputGroup className="mb-3" hasValidation>
                                        <InputGroup.Text>Due Date</InputGroup.Text>
                                        <DatePicker onChange={setDudate} minDate={new Date()} defaultValue={moment(dataTodos.due_date)} format="dd MMM y" />
                                    </InputGroup>
                                </div>
                                <FloatingLabel controlId="floatingTextarea2" label="Description">
                                    <Form.Control as="textarea" placeholder="Description" style={{ height: '100px' }} defaultValue={dataTodos.description} onChange={e => { setDesc(e.target.value) }} />
                                </FloatingLabel>
                                <Card.Body className='text-center'>
                                    <div className=" ">
                                        <Button className="btn btn-primary rounded submit p-3 px-5" onClick={handleSubmit}> Update </Button>
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
    </>);
}

export default EditTodo;
