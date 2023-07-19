import React from "react";
import {
  LoginFormController,
  LoginFormProps,
  LoginFormState,
} from "./login_form_interface";

export function template(
  this: LoginFormController,
  props: LoginFormProps,
  state: LoginFormState
) {
  return <div>Im The Login Form Page</div>;
}