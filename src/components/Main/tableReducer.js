import { sortBy, filter } from "../../utils";

export const tableReducer = (state, action) => {
  switch (action.type) {
    case "GET_CANDIDATES":
      return {
        ...state,
        error: false,
        data: action.payload,
        originalData: action.payload,
      };

    case "GET_CANDIDATES_ERROR":
      return {
        ...state,
        error: true,
        data: action.payload,
        originalData: action.payload,
      };

    case "LIST_SORT":
      const sortedData = sortBy(state.data, action.key, action.direction);
      return {
        ...state,
        data: sortedData,
        sortBy: {
          [action.key]: action.direction,
        },
      };

    case "LIST_FILTER_SORT":
      const newFilterObj = { ...state.filter, [action.key]: action.query };
      let filteredData = [...state.originalData];
      Object.keys(newFilterObj).map((key) => {
        filteredData = filter(filteredData, newFilterObj[key], [key]);
      });

      const sortKey = Object.keys(state.sortBy)[0];

      const filteredSortedData = sortBy(
        filteredData,
        sortKey,
        state.sortBy[sortKey]
      );

      return {
        ...state,
        data: filteredSortedData,
        filter: {
          ...state.filter,
          [action.key]: action.query,
        },
      };

    default:
      return state;
  }
};
