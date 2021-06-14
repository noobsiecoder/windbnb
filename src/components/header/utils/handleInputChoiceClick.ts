import React from "react";

// Handles Input choice when Location/Guest button clicked
// Choice is given to set the input UI accordingly
export default function handleInputChoiceClick(
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  choice: string,
  setButtonChoice: React.Dispatch<React.SetStateAction<string>>
): void {
  event.preventDefault();
  setButtonChoice(choice);
}
