import { Component } from "react";
import {
  ContribController,
  ContribProps,
  ContribState,
} from "./contrib_interface";
import { template } from "./contrib_template";

export class Contrib
  extends Component<ContribProps, ContribState>
  implements ContribController
{
  render = template.bind(this, this.props, this.state);

  constructor(props: ContribProps) {
    super(props);
  }
}