import React from "react";
import {
  UserFormController,
  UserFormProps,
  UserFormState,
} from "./user_form_interface";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import FloatingLabel from 'react-bootstrap/FloatingLabel';

export function template(
  this: UserFormController,
  props: UserFormProps,
  state: UserFormState
) {
  return (
  <>
    <Card.Title as="h5" className="text-center mb-5 fw-light fs-5">
      Sign Up
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
          type="email"
          id="email"
          name="email"
          placeholder="name@example.com"
          required
        />
        <Form.Label htmlFor="">Email address</Form.Label>
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
      <div className="d-grid">
        <Button
          type="submit"
          variant="primary"
          className="btn-login text-uppercase fw-bold"
        >
          Sign Up
        </Button>
      </div>
    </Form>
    </>
  );
}
