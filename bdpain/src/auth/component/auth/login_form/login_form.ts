import { Component } from "react";
import {
  Login_Form_Controller,
  Login_Form_Props,
  Login_Form_State,
} from "./login_form_interface";
import { template } from "./login_form_template";

export class Login_Form
  extends Component<Login_Form_Props, Login_Form_State>
  implements Login_Form_Controller
{
  render = template.bind(this, this.props, this.state);

  constructor(props: Login_Form_Props) {
    super(props);
  }
}