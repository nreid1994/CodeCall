import { Component } from "react";
import {
  AuthChangePasswordController,
  AuthChangePasswordProps,
  AuthChangePasswordState,
} from "./auth_change_password_interface";
import { template } from "./auth_change_password_template";

export class AuthChangePassword
  extends Component<AuthChangePasswordProps, AuthChangePasswordState>
  implements AuthChangePasswordController
{
  render = template.bind(this, this.props, this.state);

  constructor(props: AuthChangePasswordProps) {
    super(props);
  }
}