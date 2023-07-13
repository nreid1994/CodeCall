import { Component } from "react";
import {
  Register_Form_Controller,
  Register_Form_Props,
  Register_Form_State,
} from "./register_form_interface";
import { template } from "./register_form_template";

export class Register_Form
  extends Component<Register_Form_Props, Register_Form_State>
  implements Register_Form_Controller
{
  render = template.bind(this, this.props, this.state);

  constructor(props: Register_Form_Props) {
    super(props);
  }
}