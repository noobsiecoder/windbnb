import React from "react";
import { Dispatch } from "redux";

// Utility
import handleSearchBarClick from "./handleSearchBarClick";

// Handles click event when search button is clicked after selecting location and count
// Dispatches an action containing city and guests to the dispatcher
export default function handleSearchButtonClick(
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  setIsSearchFilterShown: React.Dispatch<React.SetStateAction<boolean>>,
  city: string,
  maxGuests: number,
  dispatch: Dispatch
): void {
  if (maxGuests) {
    dispatch({ type: "FILTER_STAY_DATA", payload: { city, maxGuests } });
    handleSearchBarClick(event, setIsSearchFilterShown);
  } else {
    alert("Please add more than 1 member please");
  }
}
