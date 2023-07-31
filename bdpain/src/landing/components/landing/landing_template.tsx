import React from "react";
import {
  LandingController,
  LandingProps,
  LandingState,
} from "./landing_interface";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

export function template(
  this: LandingController,
  props: LandingProps,
  state: LandingState
) {
  return (
    <>
      <Card.Title as="h5" className="text-center mb-5 fw-light fs-1">
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
            className="btn-login text-uppercase fw-bold"
          >
            Sign In
          </Button>
        </div>
      </Form>
      <Card.Link href="">Forgot Password? </Card.Link>
    </>
  );
}