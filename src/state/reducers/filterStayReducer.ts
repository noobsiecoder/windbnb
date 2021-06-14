// Data which contains al the stay info in a json file
import jsonStayData from "../../assets/json/stays.json";

// Action type
import { FilterStayType } from "../actions/filterStayAction";

const initialState = {
  stayData: jsonStayData,
};

// Interface for redux manipulation
export interface StayReduxCombinerState {
  stay: {
    stayData: [
      {
        city: string;
        country: string;
        superHost: boolean;
        title: string;
        rating: number;
        maxGuests: number;
        type: string;
        beds: number | null;
        photo: string;
      }
    ];
  };
}

export interface StayState {
  stayData: object[];
}

export const filterStayReducer = (
  state: StayState = initialState,
  action: FilterStayType
) => {
  switch (action.type) {
    case "FILTER_STAY_DATA": {
      const result = jsonStayData.filter(
        (stayData: any) =>
          action.payload.city.split(", ")[0] === stayData.city &&
          action.payload.maxGuests <= stayData.maxGuests
      );
      return { stayData: [...result] };
    }
    default:
      return { ...state };
  }
};
