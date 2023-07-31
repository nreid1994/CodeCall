import React from "react";
import {
  AdminContainerController,
  AdminContainerProps,
  AdminContainerState,
} from "./admin_container_interface";

import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from "react-bootstrap/esm/ProgressBar";

export function template(
  this: AdminContainerController,
  props: AdminContainerProps,
  state: AdminContainerState
) {
  return (
    <>
      <div className="py-2 row">
        <Card.Title className="fs-2 bolded">Admin View</Card.Title>
          <Card.Subtitle className='text-center mt-3 mb-3 fs-5 bolded'>Force Logout/ Impersonate/ Promote</Card.Subtitle>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Enter Username Here"
              className="mt-3"
              aria-label="Search"
            />
          </Form>
          <Container>
            <Row className='mt-3'>
              <Col>
                <Button variant="secondary">Force Logout</Button>
              </Col>
              <Col>
                <Button variant="secondary">Impersonate</Button>
              </Col>
              <Col>
                <Button variant="secondary">Promote</Button>
              </Col>
            </Row>
          </Container>
          <Card.Subtitle className='text-center mt-5 mb-5 fs-5 bolded'>Create New Account</Card.Subtitle>
          <Form className="form-floating mb-3">
            <Form.Floating className="mb-3">
              <Form.Control
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
              />
              <Form.Label htmlFor="email">Email</Form.Label>
            </Form.Floating>
            <Form.Floating className="mb-3">
              <Form.Control
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                pattern="[a-zA-Z0-9_\-]*"
                title="Hey, your username can only be alphanumeric with dashes and underscores."
                required
              />
              <Form.Label htmlFor="username">Username</Form.Label>
            </Form.Floating>
            <Form.Floating className="mb-3">
              <Form.Control
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                title="Hey, your password must be more than 10 characters."
                required
              />
              <Form.Label htmlFor="password">Password</Form.Label>
            </Form.Floating>
            <ProgressBar now={50} label={`${50}%`} className="mb-3" />
            <Form.Floating className="mb-3">
              <Form.Control
                type="text"
                id="captcha"
                name="captcha"
                placeholder="captcha"
                required
              />
              <Form.Select className='mt-3 pt-3' aria-label="Default select example">
                <option>Select Type of User</option>
                <option value="1">Administrator</option>
                <option value="2">Staff</option>
                <option value="3">Inner</option>
              </Form.Select>
              <Form.Label htmlFor="captcha">Captcha: What is 2+2</Form.Label>
            </Form.Floating>
            <div className="d-grid">
              <Button
                type="submit"
                variant="primary"
                className="btn-register text-uppercase fw-bold"
              >
                Sign Up
              </Button>
            </div>
          </Form>
          <Card.Subtitle className='text-center mt-3 mb-3 fs-5 bolded'>Statistics About System</Card.Subtitle>
          
      </div>
    </>
  );;
}
