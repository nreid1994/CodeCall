import React from "react";
import {
  AdminContainerController,
  AdminContainerProps,
  AdminContainerState,
} from "./admin_container_interface";
export function template(
  this: AdminContainerController,
  props: AdminContainerProps,
  state: AdminContainerState
) {
  return <div>Im The Admin Container Page</div>;
}
