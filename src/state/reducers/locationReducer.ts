// Action type
import { LocationType } from "../actions/locationAction";

const initialState = {
  name: "Helsinki, Finland",
};

// Interface for redux manipulation
export interface LocationReduxCombinerState {
  location: { name: string };
}

export interface LocationState {
  name: string;
}

export const locationReducer = (
  state: LocationState = initialState,
  action: LocationType
) => {
  switch (action.type) {
    case "CHANGE_LOCATION": {
      return { name: `${action.payload}, Finland` };
    }

    default:
      return { ...state };
  }
};
