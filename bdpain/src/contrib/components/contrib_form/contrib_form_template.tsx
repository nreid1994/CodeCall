import React from "react";
import {
  ContribFormController,
  ContribFormProps,
  ContribFormState,
} from "./contrib_form_interface";

export function template(
  this: ContribFormController,
  props: ContribFormProps,
  state: ContribFormState
) {
  return <div>Im The Contrib Form Page</div>;
}