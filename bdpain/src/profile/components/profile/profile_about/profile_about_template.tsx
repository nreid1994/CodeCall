import React from "react";
import {
  ProfileAboutController,
  ProfileAboutProps,
  ProfileAboutState,
} from "./profile_about_interface";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Image from 'react-bootstrap/Image';

export function template(
  this: ProfileAboutController,
  props: ProfileAboutProps,
  state: ProfileAboutState
) {
  return (
    <>
			<div className="row">
				<Card.Body>
				<Card.Title className="fs-4 bolded">About</Card.Title>
				<Card.Text className="mb-1 text-muted">
				I grew up in ..., ...in the ... I attended and received a B.A. in...
				</Card.Text>
				</Card.Body>
			</div>
    </>
  );
}