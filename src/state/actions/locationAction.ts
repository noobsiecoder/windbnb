export type LocationType = {
  type: "CHANGE_LOCATION";
  payload: string;
};

export const changeLocationAction = (location: string): LocationType => ({
  type: "CHANGE_LOCATION",
  payload: location,
});
