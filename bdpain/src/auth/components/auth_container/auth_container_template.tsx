import React from "react";
import "./auth_container.scss";
import {
  AuthContainerController,
  AuthContainerProps,
  AuthContainerState,
} from "./auth_container_interface";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { LoginForm } from "../login_form/login_form";

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
              <LoginForm />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
