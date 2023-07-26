import { Component } from "react";
import {
  AppController,
  AppProps,
  AppState,
} from "./app_interface";
import { template } from "./app_template";

export class App
  extends Component<AppProps, AppState>
  implements AppController
{
  render = () => template.call(this, this.props, this.state);

  constructor(props: AppProps) {
    super(props);
  }
}