import React from "react";
import {
  ProfileViewController,
  ProfileViewProps,
  ProfileViewState,
} from "./profile_view_interface";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Stack from 'react-bootstrap/Stack';
import { ProfileAbout } from "../../../profile/components/profile/profile_about/profile_about";
import { ProfileExperience } from "../../../profile/components/profile/profile_experience/profile_experience";
import { ProfileSkills } from "../../../profile/components/profile/profile_skills/profile_skills";
import { ProfileEducation } from "../../../profile/components/profile/profile_education/profile_education";
import { ProfileVolunteering } from "../../../profile/components/profile/profile_volunteering/profile_volunteering";

export function template(
  this: ProfileViewController,
  props: ProfileViewProps,
  state: ProfileViewState
) {
  return (
    <>
      <Stack className="gap-3">
        <Col className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <Card className="card border-0 shadow rounded-3">
            <Card.Body className="p-4">
              <ProfileExperience />
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <Card className="card border-0 shadow rounded-3">
            <Card.Body className="p-4">
              <ProfileSkills />
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <Card className="card border-0 shadow rounded-3">
            <Card.Body className="p-4">
              <ProfileEducation />
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <Card className="card border-0 shadow rounded-3">
            <Card.Body className="p-4">
              <ProfileVolunteering />
            </Card.Body>
          </Card>
        </Col>
      </Stack>
    </>
  );
}