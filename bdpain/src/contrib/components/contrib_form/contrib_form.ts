import { Component } from "react";
import {
  ContribFormController,
  ContribFormProps,
  ContribFormState,
} from "./contrib_form_interface";
import { template } from "./contrib_form_template";

export class Contrib_Form
  extends Component<ContribFormProps, ContribFormState>
  implements ContribFormController
{
  render = template.bind(this, this.props, this.state);

  constructor(props: ContribFormProps) {
    super(props);
  }
}