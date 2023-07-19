import { Component } from "react";
import {
  RegisterFormController,
  RegisterFormProps,
  RegisterFormState,
} from "./register_form_interface";
import { template } from "./register_form_template";

export class Register_Form
  extends Component<RegisterFormProps, RegisterFormState>
  implements RegisterFormController
{
  render = template.bind(this, this.props, this.state);

  constructor(props: RegisterFormProps) {
    super(props);
  }
}