import { Component } from "react";
import {
  ProfileController,
  ProfileProps,
  ProfileState,
} from "./profile_interface";
import { template } from "./profile_template";

export class Profile
  extends Component<ProfileProps, ProfileState>
  implements ProfileController
{
  render = () => template.call(this, this.props, this.state);

  constructor(props: ProfileProps) {
    super(props);
  }
}