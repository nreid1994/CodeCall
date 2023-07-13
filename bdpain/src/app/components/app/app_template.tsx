import React from "react";
import {
  AppController,
  AppProps,
  AppState,
} from "./app_interface";

export function template(
  this: AppController,
  props: AppProps,
  state: AppState
) {
  return <div>Im The opportunity Page</div>;
}