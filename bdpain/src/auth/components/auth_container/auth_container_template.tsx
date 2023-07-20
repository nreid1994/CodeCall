import React from "react";
import "./auth_container.scss";
import {
  AuthContainerController,
  AuthContainerProps,
  AuthContainerState,
} from "./auth_container_interface";
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from "react-bootstrap/Row";

export function template(
  this: AuthContainerController,
  props: AuthContainerProps,
  state: AuthContainerState
) {
  return (
    <Container>
      <Row>
        <Col className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <Card className="card border-0 shadow rounded-3 my-5">
            <Card.Body className="p-4 p-sm-5">
              <Card.Title as="h5" className="text-center mb-5 fw-light fs-5">Sign In</Card.Title>
              <Form className="form-floating mb-3">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Email address"
                  className="mb-3"
                >
                  <Form.Control type="email"/>
                </FloatingLabel>
              </Form>
              <Form className="form-floating mb-3">
                <FloatingLabel controlId="floatingPassword" label="Password">
                  <Form.Control type="password"/>
                </FloatingLabel>
              </Form>
              <Form className="form-check mb-3">
                <Form.Group>
                  <Form.Check type="checkbox" value="" id="rememberPasswordCheck"/>
                  <Form.Label>Remember password</Form.Label>
                </Form.Group>
              </Form>
              <Form className="d-grid">
                <Button type="submit" className="btn btn-primary btn-login text-uppercase fw-bold">Sign In</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
