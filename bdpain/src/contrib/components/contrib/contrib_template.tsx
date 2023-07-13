import React from "react";
import {
  opportunityController,
  opportunityProps,
  opportunityState,
} from "./opportunity_interface";

export function template(
  this: opportunityController,
  props: opportunityProps,
  state: opportunityState
) {
  return <div>Im The opportunity Page</div>;
}