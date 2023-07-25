import React from "react";
import {
  UserFormController,
  UserFormProps,
  UserFormState,
} from "./user_form_interface";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import ProgressBar from 'react-bootstrap/ProgressBar';

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
          <Form.Label htmlFor="email">Captcha: What is 2+2</Form.Label>
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
    </>
  );
}