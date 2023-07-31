import { Component } from "react";
import {
  AuthFindAccountController,
  AuthFindAccountProps,
  AuthFindAccountState,
} from "./auth_find_account_interface";
import { template } from "./auth_find_account_template";

export class AuthFindAccount
  extends Component<AuthFindAccountProps, AuthFindAccountState>
  implements AuthFindAccountController
{
  render = () => template.call(this, this.props, this.state);

  constructor(props: AuthFindAccountProps) {
    super(props);
  }
}