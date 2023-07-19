import React from "react";
import {
  AuthContainerController,
  AuthContainerProps,
  AuthContainerState,
} from "./auth_container_interface";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function template(
  this: AuthContainerController,
  props: AuthContainerProps,
  state: AuthContainerState
) {
  return (
    <Container>
      <Row>
        <Col className="col-sm-9 col-md-7 col-lg-5 mx-auto">Hi</Col>
      </Row>
    </Container>
  );
}
