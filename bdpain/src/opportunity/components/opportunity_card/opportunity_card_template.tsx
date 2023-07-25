import React from "react";
import {
  OpportunityCardController,
  OpportunityCardProps,
  OpportunityCardState,
} from "./opportunity_card_interface";
import Card from 'react-bootstrap/Card';

export function template(
  this: OpportunityCardController,
  props: OpportunityCardProps,
  state: OpportunityCardState
) {
return (
  <>
    <Card.Body>
    <Card.Title className="fs-3 text-primary">The Job</Card.Title>
    <Card.Subtitle className="mb-1">Company</Card.Subtitle>
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
    <Card.Text className="d-inline text-success">
        Applicants
    </Card.Text>
    </Card.Body>
      
  </>
  );
}