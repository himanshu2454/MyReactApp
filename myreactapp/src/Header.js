import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image'


const Headerr = () => 

    (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">To-Do List</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">About</Nav.Link>
                     
                </Nav>
                <Nav>
                    <Nav.Link href="LoginRegister">Login/Register</Nav.Link>
                </Nav>
                
                <Image src="https://lh3.googleusercontent.com/proxy/ltMrB_WXyYFFEaFsR6vC79IAeADSWinNjqjKWDIxVN0zcFbHti9u176Ms4CARgaSSR-k7t5cwyE0He7qNDrnGjOkLuG-IDTxBKfXE9IB3eCTnGr7vSZMmrIRzpp4xpkmmx1sPAiZgkz-gE8" style ={{height : "25px"}} fluid />
                <img src="https://fulfillmentiq.com/wp-content/uploads/2021/04/FIQ-Fulfillment-IQ-logo-1.png" class="img-fluid" alt="Responsive"></img>
                
                <span>Training</span>

            </Navbar.Collapse>
        </Navbar>
    );

export default Headerr