import { Component } from "react";
import {
  AuthContainerController,
  AuthContainerProps,
  AuthContainerState,
} from "./auth_container_interface";
import { template } from "./auth_container_template";

export class AuthContainer
  extends Component<AuthContainerProps, AuthContainerState>
  implements AuthContainerController
{
  render = () => template.call(this, this.props, this.state);
  constructor(props: AuthContainerProps) {
    super(props);
  }
}
