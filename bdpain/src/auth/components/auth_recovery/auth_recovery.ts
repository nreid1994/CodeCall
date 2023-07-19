import { Component } from "react";
import {
  AuthRecoveryController,
  AuthRecoveryProps,
  AuthRecoveryState,
} from "./auth_recovery_interface";
import { template } from "./auth_recovery_template";

export class Auth_Recovery
  extends Component<AuthRecoveryProps, AuthRecoveryState>
  implements AuthRecoveryController
{
  render = template.bind(this, this.props, this.state);

  constructor(props: AuthRecoveryProps) {
    super(props);
  }
}