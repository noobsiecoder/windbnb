import React from "react";
import { useSelector } from "react-redux";

// Redux reducer
import { CountReduxCombinerState } from "../../../../state/reducers/guestReducer";

// Utility
import { handleInputChoiceClick } from "../../utils/index";

// React component
import Placeholder from "./Placeholder";

interface GuestButtonProps {
  setButtonChoice: React.Dispatch<React.SetStateAction<string>>;
}

const GuestButton: React.FC<GuestButtonProps> = ({ setButtonChoice }) => {
  const totalCount = useSelector<
    CountReduxCombinerState,
    CountReduxCombinerState["guestCount"]["totalCount"]
  >((state) => state.guestCount.totalCount);

  return (
    <button
      onClick={(event) =>
        handleInputChoiceClick(event, "GUESTS", setButtonChoice)
      }
      className="w-full p-2 text-left bg-white rounded-lg rounded-t-none md:rounded-lg md:rounded-l-none md:rounded-r-none focus:outline-none hover:bg-gray-100"
    >
      <div className="flex flex-col gap-y-0.5">
        <Placeholder placeholder="GUESTS" />
        {totalCount ? (
          <span className="text-sm leading-5 text-gray-750 whitespace-nowrap font-mulish">
            {totalCount} guests
          </span>
        ) : (
          <span className="text-sm leading-5 text-gray-400 whitespace-nowrap font-mulish">
            Add guests
          </span>
        )}
      </div>
    </button>
  );
};

export default GuestButton;
