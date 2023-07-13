import { Component } from "react";
import {
  OpportunityFeedController,
  OpportunityFeedProps,
  OpportunityFeedState,
} from "./opportunity_feed_interface";
import { template } from "./opportunity_feed_template";

export class Opportunity_Feed
  extends Component<OpportunityFeedProps, OpportunityFeedState>
  implements OpportunityFeedController
{
  render = template.bind(this, this.props, this.state);

  constructor(props: OpportunityFeedProps) {
    super(props);
  }
}