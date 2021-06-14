import React from "react";
import { useSelector } from "react-redux";

// Redux reducers
import { LocationReduxCombinerState } from "../../state/reducers/locationReducer";
import { CountReduxCombinerState } from "../../state/reducers/guestReducer";

// Utility
import { handleSearchBarClick } from "./utils/index";

// React components
import Logo from "../../assets/logo/logo.svg";
import SearchFilter from "./SearchFilter/index";
import { SearchIcon } from "../icons/index";

const CompanyLogo: React.FC = () => <img src={Logo} alt="company_logo" />;

const LocationLabel: React.FC = () => {
  const location = useSelector<
    LocationReduxCombinerState,
    LocationReduxCombinerState["location"]["name"]
  >((state) => state.location.name);

  return (
    <div className="flex justify-center w-3/4 px-2 border border-t-0 border-b-0 border-l-0">
      <span className="text-sm leading-5 text-gray-750 whitespace-nowrap font-mulish">
        {location}
      </span>
    </div>
  );
};

const GuestLabel: React.FC = () => {
  const totalCount = useSelector<
    CountReduxCombinerState,
    CountReduxCombinerState["guestCount"]["totalCount"]
  >((state) => state.guestCount.totalCount);

  return (
    <div className="flex justify-center w-2/4 px-2 border border-t-0 border-b-0 border-l-0">
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
  );
};

const SearchBar: React.FC = () => (
  <div className="flex py-4 rounded-lg">
    <LocationLabel />
    <GuestLabel />
    <div className="flex items-center justify-center w-1/4 px-2 text-red-500">
      <div className="w-4 h-4">
        <SearchIcon />
      </div>
    </div>
  </div>
);

const Header: React.FC = () => {
  const [isSearchFilterShown, setIsSearchFilterShown] =
    React.useState<boolean>(false);

  return (
    <>
      <div className="w-full p-4 sm:p-6 md:p-8 lg:py-8 lg:px-10 xl:px-12 2xl:px-14">
        <div className="flex flex-col gap-y-12 md:flex-row md:justify-between md:items-center md:gap-y-0">
          <div className="w-max">
            <a href="https://windbnb-react-redux-ts.netlify.app">
              <CompanyLogo />
            </a>
          </div>
          <button
            onClick={(event) =>
              handleSearchBarClick(event, setIsSearchFilterShown)
            }
            className="w-full transition duration-200 rounded-lg shadow-lg md:w-96 focus:outline-none hover:bg-gray-100"
          >
            <SearchBar />
          </button>
        </div>
      </div>
      {isSearchFilterShown ? (
        <SearchFilter setIsSearchFilterShown={setIsSearchFilterShown} />
      ) : null}
    </>
  );
};

export default Header;
