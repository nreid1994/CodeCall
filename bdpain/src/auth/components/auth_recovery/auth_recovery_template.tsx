import React from "react";
import {
  AuthRecoveryController,
  AuthRecoveryProps,
  AuthRecoveryState,
} from "./auth_recovery_interface";

export function template(
  this: AuthRecoveryController,
  props: AuthRecoveryProps,
  state: AuthRecoveryState
) {
  return <div>Im The Auth Recovery Page</div>;
}