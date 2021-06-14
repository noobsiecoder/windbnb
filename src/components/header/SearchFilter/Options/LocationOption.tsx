import React from "react";
import { useDispatch } from "react-redux";

// Utility
import { handleLocationChangeClick } from "../../utils/index";

// React component - Icon
import { LocationIcon } from "../../../icons/index";

const LocationOption: React.FC = () => {
  const locations = ["Helsinki", "Turku", "Oulu", "Vaasa"];
  const dispatch = useDispatch();

  return (
    <ul className="grid gap-y-4">
      {locations.map((location, index) => (
        <button
          onClick={(event) =>
            handleLocationChangeClick(event, location, dispatch)
          }
          key={index}
          className="flex p-2 gap-x-1 focus:outline-none"
        >
          <LocationIcon />
          <li className="text-sm font-mulish text-gray-750">
            {location}, Finland
          </li>
        </button>
      ))}
    </ul>
  );
};

export default LocationOption;
