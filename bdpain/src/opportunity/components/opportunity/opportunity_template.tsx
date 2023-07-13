import React from "react";
import {
  OpportunityController,
  OpportunityProps,
  OpportunityState,
} from "./opportunity_interface";

export function template(
  this: OpportunityController,
  props: OpportunityProps,
  state: OpportunityState
) {
  return <div>Im The Opportunity Page</div>;
}