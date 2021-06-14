export type FilterStayType = {
  type: "FILTER_STAY_DATA";
  payload: { city: string; maxGuests: number };
};

export const changeLocationAction = (
  city: string,
  maxGuests: number
): FilterStayType => ({
  type: "FILTER_STAY_DATA",
  payload: { city, maxGuests },
});
