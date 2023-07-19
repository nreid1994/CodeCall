import React from "react";
import {
  RegisterFormController,
  RegisterFormProps,
  RegisterFormState,
} from "./register_form_interface";

export function template(
  this: RegisterFormController,
  props: RegisterFormProps,
  state: RegisterFormState
) {
  return <div>Im The Register Form Page</div>;
}