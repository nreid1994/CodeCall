import React from "react";
import {
  Login_Form_Controller,
  Login_Form_Props,
  Login_Form_State,
} from "./login_form_interface";

export function template(
  this: Login_Form_Controller,
  props: Login_Form_Props,
  state: Login_Form_State
) {
  return <div>Im The Landing Page</div>;
}