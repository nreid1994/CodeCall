import React from "react";
import {
  ProfileController,
  ProfileProps,
  ProfileState,
} from "./profile_interface";

export function template(
  this: ProfileController,
  props: ProfileProps,
  state: ProfileState
) {
  return <div>Im The Profile Page</div>;
}