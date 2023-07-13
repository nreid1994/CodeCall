import React from "react";
import {
  NavbarController,
  NavbarProps,
  NavbarState,
} from "./navbar_interface";

export function template(
  this: NavbarController,
  props: NavbarProps,
  state: NavbarState
) {
  return <div>Im The Navbar Page</div>;
}