import React from "react";
import {
  ProfileViewController,
  ProfileViewProps,
  ProfileViewState,
} from "./profile_view_interface";

export function template(
  this: ProfileViewController,
  props: ProfileViewProps,
  state: ProfileViewState
) {
  return <div>Im The Profile View Page</div>;
}