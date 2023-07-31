import React from "react";
import {
  AuthFindAccountController,
  AuthFindAccountProps,
  AuthFindAccountState,
} from "./auth_find_account_interface";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";

export function template(
  this: AuthFindAccountController,
  props: AuthFindAccountProps,
  state: AuthFindAccountState
) {
  return (
    <>
      <Card.Title as="h5" className="text-center mb-5 fw-light fs-5">
        Forgot Password?
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
        <div className="d-grid">
          <Stack className="gap-3">
            <Button
              type="submit"
              variant="primary"
              className="btn-register text-uppercase fw-bold"
            >
              Change Password
            </Button>
            <Button variant="outline-secondary">Cancel</Button>
          </Stack>
        </div>
      </Form>
    </>
  );
}