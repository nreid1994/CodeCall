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
import { ProfileView } from "../../../profile/components/profile_view/profile_view";
import { ProfileAbout } from "../../../profile/components/profile/profile_about/profile_about";
import { ProfileExperience } from "../../../profile/components/profile/profile_experience/profile_experience";
import { ProfileSkills } from "../../../profile/components/profile/profile_skills/profile_skills";
import { ProfileEducation } from "../../../profile/components/profile/profile_education/profile_education";
import { ProfileVolunteering } from "../../../profile/components/profile/profile_volunteering/profile_volunteering";
import { ProfileTop } from "../../../profile/components/profile/profile_top/profile_top";
import { Admin } from "../../../admin/components/admin/admin";

export function template(
  this: AuthContainerController,
  props: AuthContainerProps,
  state: AuthContainerState
) {
  return (
    <>
      <Navbar />
      <Admin/>
    </>
  );
}

