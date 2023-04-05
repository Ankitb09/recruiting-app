import { sortBy, filter } from "../../utils";

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

    case "LIST_FILTER":
      const filteredData = filter(state.data, action.searchQuery, [
        "name",
        "position_applied",
        "status",
      ]);
      return {
        ...state,
        data: filteredData,
        filter: {
          searchQuery: action.searchQuery,
        },
      };

    default:
      return state;
  }
};
