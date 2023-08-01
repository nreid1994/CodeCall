import React from "react";
import {
  LandingController,
  LandingProps,
  LandingState,
} from "./landing_interface";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";

export function template(
  this: LandingController,
  props: LandingProps,
  state: LandingState
) {
  return (
    <>
      <Col className="col-sm-9 col-md-7 col-lg-5 mt-3 mx-auto">
        <Card className="card border-0 shadow rounded-3">
          <Card.Body className="px-4 py-2">
            <Card.Title as="h5" className="text-center mb-5 mt-5 fw-light fs-1">
              Sign In
            </Card.Title>
            <Form className="form-floating mb-3">
              <Form.Floating className="mb-3">
                <Form.Control
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Username"
                  pattern="[a-zA-Z0-9_\-]*"
                  title="Hey your username can only be alphanumeric with dashes and underscores."
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
                  required
                />
                <Form.Label htmlFor="password">Password</Form.Label>
              </Form.Floating>
              <Form.Floating className="mb-3">
                <Form.Check
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  value="true"
                  label="Remember Me"
                />
              </Form.Floating>
              <div className="d-grid">
                <Button
                  type="submit"
                  variant="primary"
                  className="btn-login fw-bold"
                >
                  Sign In
                </Button>
              </div>
            </Form>
            <Card.Link href="" className="d-block text-center">Forgot Password? </Card.Link>
            <Row className="my-2">
              <div className="d-inline col-5">
                <hr></hr>
              </div>
              <div className="d-inline col-2 text-center">
                or
              </div>
              <div className="d-inline col-5">
                <hr></hr>
              </div>
            </Row>
            <div className="d-grid">
              <Stack className="gap-3">
                <Button
                  type="submit"
                  variant="outline-secondary"
                  className="btn-register my-1 mb-3 fw-bold"
                >
                  Change Password
                </Button>
              </Stack>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <div>
        <Card.Title as="h5" className="text-center mb-5 mt-5 fs-1 bolded">
          About Us
        </Card.Title>
        <Card.Text className="text-center mb-5 mt-5 fs-5">
          We made this site to help people further evolve their companies and careers. Thank you for using our site!
        </Card.Text>
        <Card.Subtitle className="text-center mb-5 mt-5 fs-3 bolded">
          Features
        </Card.Subtitle>
      </div>
    </>
  );
}