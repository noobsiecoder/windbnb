import React from "react";

// Handles search bar click
// When clicked Search Filter UI is bought up or hidden accordingly
export default function handleSearchBarClick(
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  setIsSearchFilterShown: React.Dispatch<React.SetStateAction<boolean>>
): void {
  event.preventDefault();
  setIsSearchFilterShown((isSearchFilterShown) => !isSearchFilterShown);
}
