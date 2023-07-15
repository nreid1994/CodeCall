import { Component } from "react";
import {
  AdminController,
  AdminProps,
  AdminState,
} from "./admin_interface";
import { template } from "./admin_template";

export class Admin
  extends Component<AdminProps, AdminState>
  implements AdminController
{
  render = template.bind(this, this.props, this.state);

  constructor(props: AdminProps) {
    super(props);
  }
}
