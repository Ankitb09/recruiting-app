import { sortBy } from "../../utils";

export const tableReducer = (state, action) => {
  switch (action.type) {
    case "GET_CANDIDATES":
      return { ...state, error: false, data: action.payload };

    case "GET_CANDIDATES_ERROR":
      return { ...state, error: true, data: action.payload };

    case "LIST_SORT":
      const sortedData = sortBy(state.data, action.key, action.direction);
      return {
        ...state,
        data: sortedData,
        sorting: {
          sortByKey: action.key,
          sortingDirection: action.direction,
        },
      };

    default:
      return state;
  }
};
