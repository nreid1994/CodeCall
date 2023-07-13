import { Component } from "react";
import {
  Admin_Skeleton_Controller,
  Admin_Skeleton_Props,
  Admin_Skeleton_State,
} from "./admin_skeleton_interface";
import { template } from "./admin_skeleton_template";
export class Admin_Skeleton
  extends Component<Admin_Skeleton_Props, Admin_Skeleton_State>
  implements Admin_Skeleton_Controller
{
  render = template.bind(this, this.props, this.state);
  constructor(props: Admin_Skeleton_Props) {
    super(props);
  }
}









