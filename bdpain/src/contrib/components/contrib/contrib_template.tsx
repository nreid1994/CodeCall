import React from "react";
import {
  ContribController,
  ContribProps,
  ContribState,
} from "./contrib_interface";

export function template(
  this: ContribController,
  props: ContribProps,
  state: ContribState
) {
  return <div>Im The Contrib Page</div>;
}