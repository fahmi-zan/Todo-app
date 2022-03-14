import React from 'react';
import { useState, useEffect } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap'


function Succes(props) {

    const [alert, setAlert] = useState('')

    useEffect(() => {
        setAlert(props.alert)
    }, [props]);


    return <>
        <ToastContainer className="p-3" position="bottom-end">
            <Toast>
                <Toast.Header closeButton={false}>
                    <img
                        src="holder.js/20x20?text=%20"
                        className="rounded me-2"
                        alt=""
                    />
                    <strong className="me-auto">Alert Todo App</strong>
                    {/* <small>11 mins ago</small> */}
                </Toast.Header>
                <Toast.Body>{alert}</Toast.Body>
            </Toast>
        </ToastContainer>
    </>;
}

export default Succes;
