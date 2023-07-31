import { Component } from "react";
import {
  OpportunityCardController,
  OpportunityCardProps,
  OpportunityCardState,
} from "./opportunity_card_interface";
import { template } from "./opportunity_card_template";

export class OpportunityCard
  extends Component<OpportunityCardProps, OpportunityCardState>
  implements OpportunityCardController
{
  render = () => template.call(this, this.props, this.state);

  constructor(props: OpportunityCardProps) {
    super(props);
  }
}