import React from "react";
import {
  Admin_Skeleton_Controller,
  Admin_Skeleton_Props,
  Admin_Skeleton_State,
} from "./admin_skeleton_interface";
export function template(
  this: Admin_Skeleton_Controller,
  props: Admin_Skeleton_Props,
  state: Admin_Skeleton_State
) {
  return <div>Im The Admin Page</div>;
}
