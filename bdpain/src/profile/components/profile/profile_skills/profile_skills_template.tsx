import React from "react";
import {
  ProfileSkillsController,
  ProfileSkillsProps,
  ProfileSkillsState,
} from "./profile_skills_interface";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from 'react-bootstrap/Image';

export function template(
  this: ProfileSkillsController,
  props: ProfileSkillsProps,
  state: ProfileSkillsState
) {
  return (
    <>
      <div className="border-bottom py-2 row">
        <Card.Title className="fs-4 bolded">Skills</Card.Title>
        <Card.Subtitle className="bolded">Skill Name</Card.Subtitle>
        <div className="col-1">
            <Image src="../../../favicon.ico" className="mt-3" style={{height: 35}}></Image>
        </div>
        <div className="col-11">
          <Card.Body>
            <span className="d-block mt-1">
              <Card.Text className="d-inline">
                Executive Worker
              </Card.Text>
              <Card.Text className="d-inline mx-1">
                at
              </Card.Text>
              <Card.Text className="d-inline">
                Location
              </Card.Text>
            </span>
          </Card.Body>
        </div>
      </div>
      <div className="border-bottom py-2 row">
        <Card.Title className="fs-4 bolded">Skills</Card.Title>
        <Card.Subtitle className="bolded">Skill Name</Card.Subtitle>
        <div className="col-1">
            <Image src="../../../favicon.ico" className="mt-3" style={{height: 35}}></Image>
        </div>
        <div className="col-11">
          <Card.Body>
            <span className="d-block mt-1">
              <Card.Text className="d-inline">
                Executive Worker
              </Card.Text>
              <Card.Text className="d-inline mx-1">
                at
              </Card.Text>
              <Card.Text className="d-inline">
                Location
              </Card.Text>
            </span>
          </Card.Body>
        </div>
      </div>
    </>
  );
}