import React from "react";

// Utility
import { handleSearchBarClick } from "../utils/index";

// React component - Buttons
import GuestButton from "./Buttons/GuestButton";
import LocationButton from "./Buttons/LocationButton";
import SearchButton from "./Buttons/SearchButton";

// React component - Options
import LocationOption from "./Options/LocationOption";
import GuestOption from "./Options/GuestOption";

// React component - Icon
import { CloseIcon } from "../../icons/index";

interface SearchFilterProps {
  setIsSearchFilterShown: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchFilter: React.FC<SearchFilterProps> = ({
  setIsSearchFilterShown,
}) => {
  const [buttonChoice, setButtonChoice] = React.useState<string>("LOCATION");
  return (
    <div className="fixed top-0 z-30 w-full p-2 bg-white shadow-2xl rounded-b-xl">
      <div className="p-4 space-y-8 md:px-6 lg:py-8 lg:px-8 xl:px-10">
        <div className="flex justify-between">
          <span className="text-sm font-bold font-mulish">
            Edit your search
          </span>
          <button
            onClick={(event) =>
              handleSearchBarClick(event, setIsSearchFilterShown)
            }
            className="focus:outline-none"
          >
            <CloseIcon />
          </button>
        </div>
        <div className="flex flex-col rounded-lg shadow-lg md:flex-row">
          <LocationButton setButtonChoice={setButtonChoice} />
          <GuestButton setButtonChoice={setButtonChoice} />
          <div className="hidden md:w-7/12 md:block">
            <SearchButton setIsSearchFilterShown={setIsSearchFilterShown} />
          </div>
        </div>
        {buttonChoice === "LOCATION" ? (
          <div className="md:flex md:justify-between">
            <LocationOption />
            <div className="hidden md:block md:invisible">
              <GuestOption />
            </div>
            <div className="hidden w-3/12 md:p-2 md:block md:invisible"></div>
          </div>
        ) : (
          <div className="md:flex md:justify-between">
            <div className="hidden md:block md:invisible">
              <LocationOption />
            </div>
            <GuestOption />
            <div className="hidden w-3/12 md:p-2 md:block md:invisible"></div>
          </div>
        )}
      </div>
      <div className="w-full p-4 md:hidden">
        <SearchButton setIsSearchFilterShown={setIsSearchFilterShown} />
      </div>
    </div>
  );
};

export default SearchFilter;
