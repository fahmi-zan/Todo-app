import React from 'react';
import { Container, Button, Row, Card } from "react-bootstrap";
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { BsPencilFill, BsTrashFill, BsCheckLg } from "react-icons/bs";
import ReactLoading from 'react-loading';
import moment from 'moment'
import "../../index.css"
import Navbar from "../../components/navbar/Header"
import Footer from "../../components/footer/Footer"

// import Succes from '../../components/alert/Succes';


export default function Home() {

    const getToken = localStorage.getItem('token')
    const posts = useSelector(({ listPost }) => listPost)


    const navigate = useNavigate()

    const getEdit = (id) => {
        navigate(`/edit/${id}`)
    }

    if (!getToken) {

        navigate('/')
    }
    return (<>
        <Navbar />
        <Container>
            <Row className='justify-content-md-center mt-5'>
                <div className="mb-2 text-center">
                    <Button className='btn-add' onClick={() => { navigate('/create') }}>
                        + Add Todo List
                    </Button>{' '}
                </div>
            </Row>
            <Container fluid="md">
                <Row className='mt-2 flex'>
                    {posts ? posts.map((el, i) => {
                        return (
                            <Card style={{ width: '15rem' }} key={i} className="shadow p-1 m-3 bg-body rounded">
                                <Card.Body>
                                    <Card.Title className='fs-4'>{el.title}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{moment(el.due_date).format('DD MMM YYYY')} </Card.Subtitle>
                                    <Card.Text>
                                        {el.description}
                                    </Card.Text>
                                    <div className='text-center'>
                                        <button className="btn btn-light" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Done"><BsCheckLg /></button>
                                        <button className="btn btn-light m-sm-2" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Edit" onClick={() => { getEdit(el.id) }}><BsPencilFill /></button>
                                        <button className="btn btn-light" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Delete"><BsTrashFill /></button>
                                    </div>
                                </Card.Body>
                            </Card>
                        )
                    }) : <div className='row justify-content-center align-middle'>
                        <ReactLoading type="bars" color="#8B458C" height={150} width={150} />
                    </div>}
                </Row>
            </Container>
        </Container>
        {/* <Succes /> */}
        <Footer />
    </>);
}
