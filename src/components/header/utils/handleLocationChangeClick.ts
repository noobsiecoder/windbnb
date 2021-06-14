import React from "react";
import { Dispatch } from "redux";

// Handles location change when user clicks a new location
// Dispatches an action containing location name to the dispatcher
export default function handleLocationChangeClick(
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  location: string,
  dispatch: Dispatch
): void {
  event.preventDefault();
  dispatch({ type: "CHANGE_LOCATION", payload: location });
}
