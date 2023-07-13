import { Component } from "react";
import {
  opportunityController,
  opportunityProps,
  opportunityState,
} from "./opportunity_interface";
import { template } from "./opportunity_template";

export class opportunity
  extends Component<opportunityProps, opportunityState>
  implements opportunityController
{
  render = template.bind(this, this.props, this.state);

  constructor(props: opportunityProps) {
    super(props);
  }
}