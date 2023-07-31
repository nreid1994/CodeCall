import React from "react";
import {
  AuthChangePasswordController,
  AuthChangePasswordProps,
  AuthChangePasswordState,
} from "./auth_change_password_interface";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Stack from 'react-bootstrap/Stack';

export function template(
  this: AuthChangePasswordController,
  props: AuthChangePasswordProps,
  state: AuthChangePasswordState
) {
return (
    <>
      <Card.Title as="h5" className="text-center mb-5 fw-light fs-5">
        Change Password
      </Card.Title>
      <Form className="form-floating mb-3">
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
        <Form.Floating className="mb-3">
          <Form.Control
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            title="Hey, your password must be more than 10 characters."
            required
          />
          <Form.Label htmlFor="password">Confirm Password</Form.Label>
        </Form.Floating>
        <ProgressBar now={50} label={`${50}%`} className="mb-3" />
        <div className="d-grid">
          <Stack className="gap-3">
            <Button
              type="submit"
              variant="primary"
              className="btn-register text-uppercase fw-bold"
            >
              Reset Password
            </Button>
            <Button variant="outline-secondary">Cancel</Button>
          </Stack>
        </div>
      </Form>
    </>
  );
}