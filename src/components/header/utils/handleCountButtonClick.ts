import React from "react";
import { Dispatch } from "redux";

// Handles button count when clicked
// Dispatches a type and action to the dispatcher
export default function handleCountButtonClick(
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  action_type: string,
  count: number,
  dispatch: Dispatch
): void {
  event.preventDefault();
  if (count || action_type.split("_")[0] === "ADD")
    dispatch({ type: action_type, payload: count });
}
