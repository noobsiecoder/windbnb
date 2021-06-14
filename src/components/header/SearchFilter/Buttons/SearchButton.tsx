import React from "react";
import { useDispatch, useSelector } from "react-redux";

// Redux reducers
import { CountReduxCombinerState } from "../../../../state/reducers/guestReducer";
import { LocationReduxCombinerState } from "../../../../state/reducers/locationReducer";

// Utility
import { handleSearchButtonClick } from "../../utils/index";

// React component - Icon
import { SearchIcon } from "../../../icons/index";

interface SearchButtonProps {
  setIsSearchFilterShown: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchButton: React.FC<SearchButtonProps> = ({
  setIsSearchFilterShown,
}) => {
  const location = useSelector<
    LocationReduxCombinerState,
    LocationReduxCombinerState["location"]["name"]
  >((state) => state.location.name);

  const totalCount = useSelector<
    CountReduxCombinerState,
    CountReduxCombinerState["guestCount"]["totalCount"]
  >((state) => state.guestCount.totalCount);

  const dispatch = useDispatch();

  return (
    <button
      onClick={(event) =>
        handleSearchButtonClick(
          event,
          setIsSearchFilterShown,
          location,
          totalCount,
          dispatch
        )
      }
      className="w-full h-full p-3 text-white bg-red-400 rounded-lg md:rounded-l-none hover:bg-red-500 focus:outline-none"
    >
      <div className="flex items-center justify-center gap-x-2">
        <div className="w-4 h-4">
          <SearchIcon />
        </div>
        <span className="text-sm font-bold font-mulish">Search</span>
      </div>
    </button>
  );
};

export default SearchButton;
