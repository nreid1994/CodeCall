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
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col';

export function template(
  this: NavbarController,
  props: NavbarProps,
  state: NavbarState
) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Col className="col-3"></Col>
          <Image src={BDPA} className='me-2' style={{height: 30}}></Image>
          <Navbar.Brand href="#" className="me-3">BDPAIn</Navbar.Brand>
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
            <Nav.Link href="#" className='me-3'>Home</Nav.Link>
            <Nav.Link href="#" className='me-3'>Opportunities</Nav.Link>
            <Nav.Link href="#" className='me-3'>Admin</Nav.Link>
            <Nav.Link href="#" className='me-3'>Profile</Nav.Link>
            <div className="vr me-3" />
            <Button>Login</Button>
          </Navbar.Collapse>
        <Col className="col-3"></Col>
      </Container>
    </Navbar>
  );
}