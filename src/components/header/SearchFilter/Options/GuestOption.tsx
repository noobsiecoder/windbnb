import React from "react";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";

// Redux reducers
import { CountReduxCombinerState } from "../../../../state/reducers/guestReducer";

// Utility
import { handleCountButtonClick } from "../../utils/index";

// React component - Icons
import { AddIcon, MinusIcon } from "../../../icons/index";

interface OptionDescriptionProps {
  title: string;
  description: string;
}

interface CountProps {
  count: number;
  action_type: string;
  dispatch: Dispatch;
}

const OptionDescription: React.FC<OptionDescriptionProps> = ({
  title,
  description,
}) => (
  <div className="grid">
    <span className="text-sm font-bold leading-5 font-mulish text-gray-750">
      {title}
    </span>
    <span className="text-xs leading-5 text-gray-600 whitespace-nowrap font-mulish">
      {description}
    </span>
  </div>
);

const Count: React.FC<CountProps> = ({ count, action_type, dispatch }) => (
  <div className="flex items-center gap-x-3">
    <button
      onClick={(event) =>
        handleCountButtonClick(
          event,
          `REDUCE_${action_type}_COUNT`,
          count,
          dispatch
        )
      }
      className="p-0.5 rounded border border-gray-400 focus:ring-2 focus:ring-gray-200 focus:outline-none transition duration-200 hover:bg-gray-100"
    >
      <MinusIcon />
    </button>
    <span className="text-sm font-bold leading-5 font-mulish text-gray-750">
      {count}
    </span>

    <button
      onClick={(event) =>
        handleCountButtonClick(
          event,
          `ADD_${action_type}_COUNT`,
          count,
          dispatch
        )
      }
      className="p-0.5 rounded border border-gray-400 focus:outline-none transition duration-200 focus:ring-2 focus:ring-gray-200 hover:bg-gray-100"
    >
      <AddIcon />
    </button>
  </div>
);

const GuestOption: React.FC = () => {
  const adultCount = useSelector<
    CountReduxCombinerState,
    CountReduxCombinerState["guestCount"]["adultCount"]
  >((state) => state.guestCount.adultCount);

  const childrenCount = useSelector<
    CountReduxCombinerState,
    CountReduxCombinerState["guestCount"]["childrenCount"]
  >((state) => state.guestCount.childrenCount);

  const dispatch = useDispatch();

  return (
    <div className="p-2">
      <div className="grid gap-y-7">
        <div className="grid gap-y-2">
          <OptionDescription title="Adults" description="Ages 13 or above" />
          <Count count={adultCount} action_type="ADULT" dispatch={dispatch} />
        </div>
        <div className="grid gap-y-2">
          <OptionDescription title="Children" description="Ages 2-12" />
          <Count
            count={childrenCount}
            action_type="CHILDREN"
            dispatch={dispatch}
          />
        </div>
      </div>
    </div>
  );
};

export default GuestOption;
