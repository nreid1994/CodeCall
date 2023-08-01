import React from "react";
import {
  AdminController,
  AdminProps,
  AdminState,
} from "./admin_interface";
import Nav from 'react-bootstrap/Nav';
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './admin.scss';

export function template(
  this: AdminController,
  props: AdminProps,
  state: AdminState
) {
  return (
    <Container id='admin_container' fluid>
      <Row className='col-12'>
        <Col className='admin_sidebar col-2'>
          <Card className='admin_sidebar border-0 rounded-0'>
            <Nav defaultActiveKey="/home" className="flex-column">
              <Nav.Link href="/home" className='admin_sidebar_links'>Sites Info</Nav.Link>
              <Nav.Link href='' className='admin_sidebar_links'>Start Impersonation</Nav.Link>
              <Nav.Link href='' className='admin_sidebar_links'>Force Logout</Nav.Link>
              <Nav.Link href='' className='admin_sidebar_links'>Modify Users</Nav.Link>
            </Nav>
          </Card>
        </Col>
        <Col className='col-10'>
          <div>
            <Container fluid>
              <Card.Title className='mt-3'>Sites Info</Card.Title>
              <Row className='col-12'>
                <Col className='col-3 mt-2'>
                  <Card>
                    <Card.Body>
                      <Card.Title className='sites_info_card_title'>Total Number of Users</Card.Title>
                        <Card.Text className='sites_info_card_text'>
                          121
                        </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className='col-3 mt-2'>
                  <Card>
                    <Card.Body>
                      <Card.Title className='sites_info_card_title'>Total Number of Opportunities</Card.Title>
                        <Card.Text className='sites_info_card_text'>
                          12
                        </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className='col-3 mt-2'>
                  <Card>
                    <Card.Body>
                      <Card.Title className='sites_info_card_title'>Total Number of Views</Card.Title>
                        <Card.Text className='sites_info_card_text'>
                          34
                        </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className='col-3 mt-2'>
                  <Card>
                    <Card.Body>
                      <Card.Title className='sites_info_card_title'>Total Number of Active Viewers</Card.Title>
                        <Card.Text className='sites_info_card_text'>
                          11
                        </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </Col>
      </Row>
    </Container>
  );
}