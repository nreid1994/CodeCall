import React from "react";
import {
  NavbarController,
  NavbarProps,
  NavbarState,
} from "./navbar_interface";

import BDPA from "../../../BDPA.png";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

export function template(
  this: NavbarController,
  props: NavbarProps,
  state: NavbarState
) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Col></Col>
            <Image src={BDPA} className='' style={{width : '1.5%'}}></Image>
            <Navbar.Brand href="#">BDPAIn</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="pe-5"
                  aria-label="Search"
                />
                </Form>
              </Nav>
              <Nav.Link href="#" className='me-2 p-2'>Home</Nav.Link>
              <Nav.Link href="#" className='me-2 p-2'>Opportunities</Nav.Link>
              <Nav.Link href="#" className='me-2 p-2'>Admin</Nav.Link>
              <Nav.Link href="#" className='me-2 p-2'>Profile</Nav.Link>
              <div className="vr me-3" />
              <Button>Login</Button>
            </Navbar.Collapse>
          <Col></Col>
      </Container>
    </Navbar>
  );
}