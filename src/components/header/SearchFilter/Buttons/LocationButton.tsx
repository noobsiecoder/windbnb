import React from "react";
import { useSelector } from "react-redux";

// Redux reducers
import { LocationReduxCombinerState } from "../../../../state/reducers/locationReducer";

// Utility
import { handleInputChoiceClick } from "../../utils/index";

// React component
import Placeholder from "./Placeholder";

interface LocationButtonProps {
  setButtonChoice: React.Dispatch<React.SetStateAction<string>>;
}

const LocationButton: React.FC<LocationButtonProps> = ({ setButtonChoice }) => {
  const location = useSelector<
    LocationReduxCombinerState,
    LocationReduxCombinerState["location"]["name"]
  >((state) => state.location.name);

  return (
    <button
      onClick={(event) =>
        handleInputChoiceClick(event, "LOCATION", setButtonChoice)
      }
      className="w-full p-2 text-left bg-white border border-t-0 border-l-0 border-r-0 rounded-lg rounded-b-none md:border-b-0 md:border-r md:rounded-lg md:rounded-r-none focus:outline-none hover:bg-gray-100"
    >
      <div className="flex flex-col gap-y-0.5">
        <Placeholder placeholder="LOCATION" />
        <span className="text-sm leading-5 text-gray-750 font-mulish">
          {location}
        </span>
      </div>
    </button>
  );
};

export default LocationButton;
