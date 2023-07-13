import { Component } from "react";
import {
  AdminContainerController,
  AdminContainerProps,
  AdminContainerState,
} from "./admin_container_interface";
import { template } from "./admin_container_template";
export class Admin_Skeleton
  extends Component<AdminContainerProps, AdminContainerState>
  implements AdminContainerController
{
  render = template.bind(this, this.props, this.state);
  constructor(props: AdminContainerProps) {
    super(props);
  }
}









