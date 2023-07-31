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
import Stack from 'react-bootstrap/Stack';
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
import { ProfileVolunteering } from "../../../profile/components/profile/profile_volunteering/profile_volunteering";
import { ProfileView } from "../../../profile/components/profile_view/profile_view";
import { ProfileTop } from "../../../profile/components/profile/profile_top/profile_top";

export function template(
  this: AuthContainerController,
  props: AuthContainerProps,
  state: AuthContainerState
) {
  return (
    <>
      <Navbar />

      {/* <Stack className="gap-2 my-3">
        <Col className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <Card className="card border-0 shadow rounded-3">
            <Card.Body className="px-4 py-2">
              <LoginForm />
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <Card className="card border-0 shadow rounded-3">
            <Card.Body className="px-4 py-2">
              <UserForm />
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <Card className="card border-0 shadow rounded-3">
            <Card.Body className="px-4 py-2">
              <AuthFindAccount />
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <Card className="card border-0 shadow rounded-3">
            <Card.Body className="px-4 py-2">
              <AuthChangePassword />
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <Card className="card border-0 shadow rounded-3">
            <Card.Body className="px-4 py-2">
              <OpportunityCard />
            </Card.Body>
          </Card>
        </Col>
      </Stack> */}
      
      <ProfileView />
    </>
  );
}

