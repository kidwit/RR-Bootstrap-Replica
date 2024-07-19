import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function TopBar() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home" style={{ margin: "5px 0 0 20px" }}>
          <img
            src="https://logowik.com/content/uploads/images/instacart4829.jpg"
            className="brand-logo"
            alt="Instacart Logo"
            style={{ width: '80px', height: '80px' }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#LogIn">Log In</Nav.Link>
            <Button variant="success" className="ms-2">Sign Up</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}

export default TopBar;
