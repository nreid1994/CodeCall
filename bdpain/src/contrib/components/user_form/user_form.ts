import { Component } from "react";
import {
  UserFormController,
  UserFormProps,
  UserFormState,
} from "./user_form_interface";
import { template } from "./user_form_template";

export class UserForm
  extends Component<UserFormProps, UserFormState>
  implements UserFormController
{
  render = () => template.call(this, this.props, this.state);

  constructor(props: UserFormProps) {
    super(props);
  }
}