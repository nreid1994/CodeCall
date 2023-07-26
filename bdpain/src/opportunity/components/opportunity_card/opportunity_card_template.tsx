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
    <div className="border-bottom row">
      <div className="col-1">
        <Image src="../../../favicon.ico" className="mt-4" style={{height: 40}}></Image>
      </div>
      <div className="col-10">
        <Card.Body>
        <Card.Title className="fs-3 mx-1 text-primary">The Job</Card.Title>
        <Card.Subtitle className="mb-1 mx-1 ">Company</Card.Subtitle>
        <Card.Text className="mb-1 mx-1 text-muted">
            Location
        </Card.Text>
        <Card.Text className="mb-1 mx-1 text-muted">
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
      </div>
    </div>
    <div className="border-bottom row">
      <div className="col-1">
        <Image src="../../../favicon.ico" className="mt-4" style={{height: 40}} roundedCircle></Image>
      </div>
      <div className="col-10">
        <Card.Body>
        <Card.Title className="fs-3 text-primary">The Job</Card.Title>
        <Card.Subtitle className="mb-1 mx-1 ">Company</Card.Subtitle>
        <Card.Text className="mb-1 mx-1 text-muted">
            Location
        </Card.Text>
        <Card.Text className="mb-1 mx-1 text-muted">
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
      </div>
    </div>
    <div className="border-bottom row">
      <div className="col-1">
        <Image src="../../../logo192.png" className="mt-4" style={{height: 40}}></Image>
      </div>
      <div className="col-10">
        <Card.Body>
        <Card.Title className="fs-3 text-primary">The Job</Card.Title>
        <Card.Subtitle className="mb-1 mx-1 ">Company</Card.Subtitle>
        <Card.Text className="mb-1 mx-1 text-muted">
            Location
        </Card.Text>
        <Card.Text className="mb-1 mx-1 text-muted">
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
      </div>
    </div>
    <div className="border-bottom row">
      <div className="col-1">
        <Image src="../../../logo512.png" className="mt-4" style={{height: 40}}></Image>
      </div>
      <div className="col-10">
        <Card.Body>
        <Card.Title className="fs-3 text-primary">The Job</Card.Title>
        <Card.Subtitle className="mb-1 mx-1 ">Company</Card.Subtitle>
        <Card.Text className="mb-1 mx-1 text-muted">
            Location
        </Card.Text>
        <Card.Text className="mb-1 mx-1 text-muted">
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
      </div>
    </div>
  </>
  );
}