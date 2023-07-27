import React from "react";
import "./auth_container.scss";
import {
  AuthContainerController,
  AuthContainerProps,
  AuthContainerState,
} from "./auth_container_interface";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { LoginForm } from "../login_form/login_form";
import { UserForm } from "../../../contrib/components/user_form/user_form";
import { AuthFindAccount } from "../auth_recovery/auth_find_account/auth_find_account";
import { AuthChangePassword } from "../auth_recovery/auth_change_password/auth_change_password";
import { OpportunityCard } from "../../../opportunity/components/opportunity_card/opportunity_card";
import { Navbar } from "../../../app/components/navbar/navbar";
import { ProfileAbout } from "../../../profile/components/profile/profile_about/profile_about";
import { ProfileExperience } from "../../../profile/components/profile/profile_experience/profile_experience";
import { ProfileSkills } from "../../../profile/components/profile/profile_skills/profile_skills";
import { ProfileEducation } from "../../../profile/components/profile/profile_education/profile_education";

export function template(
  this: AuthContainerController,
  props: AuthContainerProps,
  state: AuthContainerState
) {
  return (
    <>
      <Navbar/>
      <Container>
        <Row>
          <Col className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <Card className="card border-0 shadow rounded-3 my-5">
              <Card.Body className="p-4 p-sm-5">
                <ProfileAbout />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <Card className="card border-0 shadow rounded-3 my-5">
              <Card.Body className="p-4 p-sm-5">
                <ProfileExperience />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <Card className="card border-0 shadow rounded-3 my-5">
              <Card.Body className="p-4 p-sm-5">
                <ProfileSkills />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <Card className="card border-0 shadow rounded-3 my-5">
              <Card.Body className="p-4 p-sm-5">
                <ProfileEducation />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

