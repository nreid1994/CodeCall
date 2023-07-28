import React from "react";
import {
  OpportunityCardController,
  OpportunityCardProps,
  OpportunityCardState,
} from "./opportunity_card_interface";
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

export function template(
  this: OpportunityCardController,
  props: OpportunityCardProps,
  state: OpportunityCardState
) {
return (
  <>
    <div className="row">
      <div className="col-1">
        <Image src="../../../favicon.ico" className="mt-4" style={{height: 40}}></Image>
      </div>
      <div className="col-10 position-relative p-0">
        <Card.Body>
          <Card.Title className="fs-3 text-primary">The Job</Card.Title>
          <Card.Subtitle className="mb-1 ">Company</Card.Subtitle>
          <span className="d-block">
            <Card.Text className="mb-1 text-muted">
              Location
            </Card.Text>
            <Card.Text className="mb-1 text-muted">
              Pay
            </Card.Text>
            <Card.Text className="d-inline me-1 text-muted">
              Date
            </Card.Text>
            <Card.Text className="d-inline me-1 text-muted fs-5">
              ·
            </Card.Text>
            <Card.Text className="d-inline me-1 text-success">
              Applicants
            </Card.Text>
            <span className="d-inline position-absolute end-0 me-3">
              <Card.Text className="d-inline me-1 text-muted">
                Views
              </Card.Text>
              <Card.Text className="d-inline me-1 text-muted fs-5">
                ·
              </Card.Text>
              <Card.Text className="d-inline text-muted">
                Active Viewers
              </Card.Text>
            </span>
          </span>
        </Card.Body>
      </div>
      <div className="col-1"></div>
    </div>
  </>
  );
}