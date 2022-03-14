import React from 'react';
import { Card } from "react-bootstrap";
import { BsPencilFill, BsTrashFill, BsCheckLg } from "react-icons/bs";


function ListTodos() {


    return (<>
        <Card style={{ width: '15rem' }} className="shadow p-1 m-2 bg-body rounded">
            <Card.Body>
                <Card.Title className='fs-4'></Card.Title>
                <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                <Card.Text>

                </Card.Text>
                <div className='text-center'>
                    <Card.Link><button type="button" className="btn btn-light" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Done"><BsCheckLg /></button>
                    </Card.Link>
                    <Card.Link><button type="button" className="btn btn-light" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Edit"><BsPencilFill /></button></Card.Link>
                    <Card.Link><button type="button" className="btn btn-light" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Delete"><BsTrashFill /></button></Card.Link>
                </div>
            </Card.Body>
        </Card>

    </>);
}

export default ListTodos;
