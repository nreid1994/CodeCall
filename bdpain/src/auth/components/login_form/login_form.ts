import { Component } from "react";
import {
  LoginFormController,
  LoginFormProps,
  LoginFormState,
} from "./login_form_interface";
import { template } from "./login_form_template";

export class LoginForm
  extends Component<LoginFormProps, LoginFormState>
  implements LoginFormController
{
  render = template.bind(this, this.props, this.state);

  constructor(props: LoginFormProps) {
    super(props);
  }
}
