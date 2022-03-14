import React from 'react';
import { Navbar, Nav, Container } from "react-bootstrap"
import { Link } from "react-router-dom";


export default function Header() {
  return <>
    <Navbar variant="light" className='Nav-top shadow-lg'>
      <Container>
        <Navbar.Brand>
          <h3 className='fw-bold'><Link to="/">Todo List</Link> </h3>
        </Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Item>
            <Link to="/home">Home</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/">Logout</Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  </>;
}
