import React from "react";
import {
  OpportunityFeedController,
  OpportunityFeedProps,
  OpportunityFeedState,
} from "./opportunity_feed_interface";

export function template(
  this: OpportunityFeedController,
  props: OpportunityFeedProps,
  state: OpportunityFeedState
) {
  return <div>Im The opportunity Page</div>;
}