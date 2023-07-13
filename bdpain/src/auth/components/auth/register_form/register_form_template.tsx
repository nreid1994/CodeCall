import React from "react";
import {
  Register_Form_Controller,
  Register_Form_Props,
  Register_Form_State,
} from "./register_form_interface";

export function template(
  this: Register_Form_Controller,
  props: Register_Form_Props,
  state: Register_Form_State
) {
  return <div>Im The Landing Page</div>;
}