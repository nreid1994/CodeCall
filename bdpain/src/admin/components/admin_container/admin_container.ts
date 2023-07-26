import { Component } from "react";
import {
  AdminContainerController,
  AdminContainerProps,
  AdminContainerState,
} from "./admin_container_interface";
import { template } from "./admin_container_template";
export class Admin_Container
  extends Component<AdminContainerProps, AdminContainerState>
  implements AdminContainerController
{
  render = () => template.call(this, this.props, this.state);
  constructor(props: AdminContainerProps) {
    super(props);
  }
}
