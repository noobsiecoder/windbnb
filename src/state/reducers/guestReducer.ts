// Action type
import { CountType } from "../actions/guestAction";

const initialState = {
  adultCount: 0,
  childrenCount: 0,
  totalCount: 0,
};

// Interface for redux manipulation
export interface CountReduxCombinerState {
  guestCount: { adultCount: number; childrenCount: number; totalCount: number };
}

export interface CountState {
  adultCount: number;
  childrenCount: number;
  totalCount: number;
}

function incrementValue(count: number): number {
  return (count += 1);
}

function decrementValue(count: number): number {
  return (count -= 1);
}

export const guestCountReducer = (
  state: CountState = initialState,
  action: CountType
) => {
  switch (action.type) {
    case "ADD_ADULT_COUNT": {
      const adultCount = incrementValue(action.payload);
      return {
        ...state,
        adultCount,
        totalCount: state.childrenCount + adultCount,
      };
    }

    case "REDUCE_ADULT_COUNT": {
      const adultCount = decrementValue(action.payload);
      return {
        ...state,
        adultCount,
        totalCount: state.childrenCount + adultCount,
      };
    }

    case "ADD_CHILDREN_COUNT": {
      const childrenCount = incrementValue(action.payload);
      return {
        ...state,
        childrenCount,
        totalCount: state.adultCount + childrenCount,
      };
    }

    case "REDUCE_CHILDREN_COUNT": {
      const childrenCount = decrementValue(action.payload);
      return {
        ...state,
        childrenCount,
        totalCount: state.adultCount + childrenCount,
      };
    }

    default:
      return { ...state };
  }
};
