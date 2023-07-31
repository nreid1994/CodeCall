import { Component } from "react";
import {
  NavbarController,
  NavbarProps,
  NavbarState,
} from "./navbar_interface";
import { template } from "./navbar_template";

export class Navbar
  extends Component<NavbarProps, NavbarState>
  implements NavbarController
{
  render = () => template.call(this, this.props, this.state);

  constructor(props: NavbarProps) {
    super(props);
  }
}