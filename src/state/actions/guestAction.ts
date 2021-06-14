export type CountType = {
  type:
    | "ADD_ADULT_COUNT"
    | "ADD_CHILDREN_COUNT"
    | "REDUCE_ADULT_COUNT"
    | "REDUCE_CHILDREN_COUNT";
  payload: number;
};

export const addAdultCountAction = (count: number): CountType => ({
  type: "ADD_ADULT_COUNT",
  payload: count,
});
