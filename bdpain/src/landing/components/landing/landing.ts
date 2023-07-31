import { Component } from "react";
import {
  LandingController,
  LandingProps,
  LandingState,
} from "./landing_interface";
import { template } from "./landing_template";

export class Landing
  extends Component<LandingProps, LandingState>
  implements LandingController
{
  render = () => template.call(this, this.props, this.state);

  constructor(props: LandingProps) {
    super(props);
  }
}