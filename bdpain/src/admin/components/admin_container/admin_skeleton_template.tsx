import React from "react";
import {
  AdminController,
  AdminProps,
  AdminState,
} from "./admin_interface";
export function template(
  this: AdminController,
  props: AdminProps,
  state: AdminState
) {
  return <div>Im The Admin Page</div>;
}
