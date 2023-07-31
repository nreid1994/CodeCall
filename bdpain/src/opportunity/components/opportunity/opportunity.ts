import { Component } from "react";
import {
  OpportunityController,
  OpportunityProps,
  OpportunityState,
} from "./opportunity_interface";
import { template } from "./opportunity_template";

export class Opportunity
  extends Component<OpportunityProps, OpportunityState>
  implements OpportunityController
{
  render = () => template.call(this, this.props, this.state);

  constructor(props: OpportunityProps) {
    super(props);
  }
}