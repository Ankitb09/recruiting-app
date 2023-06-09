import React, { useEffect, useState, useReducer } from "react";
import { useSearchParams } from "react-router-dom";
import * as S from "./styles";
import Table from "../Table";
import { debounce, removeEmptyKeys } from "../../utils";
import { tableReducer } from "./tableReducer";
import { Headings } from "./config";

// TODO ideally should be consumed from config or env variables.
export const BASE_PATH = "https://personio-fe-coding-challenge.vercel.app/api/";

const initialState = {
  data: [],
  filteredData: [],
  error: false,
  /**
   * 
   * name: "",
    status: "",
    position: "",
  */
  filterBy: {},
  /**
   *
   * position_applied: "desc",
   */
  sortBy: {},
};

const Main = () => {
  const [candidatesData, dispatch] = useReducer(tableReducer, initialState);
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchText, setSearchText] = useState("");
  const [showLoader, setShowLoader] = useState(false);

  const fetchCandidates = async () => {
    setShowLoader(true);

    try {
      const response = await fetch(`${BASE_PATH}candidates`);
      const finalData = await response.json();
      setShowLoader(false);

      finalData.error
        ? dispatch({ type: "GET_CANDIDATES_ERROR", payload: finalData })
        : dispatch({ type: "GET_CANDIDATES", payload: finalData.data });
    } catch (error) {
      setShowLoader(false);
      dispatch({ type: "GET_CANDIDATES_ERROR", payload: error });
    }
  };

  useEffect(() => {
    fetchCandidates();
  }, []);

  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);
    let filteredObj = removeEmptyKeys(currentParams);
    setSearchParams(filteredObj);
  }, [searchParams]);

  const handleSorting = (key, direction = "asc") => {
    dispatch({ type: "LIST_SORT", key, direction });

    // adding sorting param to URL
    const currentParams = Object.fromEntries([...searchParams]);
    /** logic to add only one sorting param to the URL,
     * checking if search query param exists.
     * If yes, then keeping it as the part of URL
     */
    if (currentParams.hasOwnProperty("query")) {
      setSearchParams({ query: currentParams.query, [key]: direction });
    } else {
      setSearchParams({ [key]: direction });
    }
  };

  const handleSearch = debounce((key, query) => {
    console.log({ [key]: query });
    dispatch({ type: "LIST_FILTER_SORT", key, query });

    // adding search query params to URL
    let obj = {};
    obj["filterBy" + key] = query; // adding "filterBy" to the added query params, to easily differentiate b/w filter and sort query params
    const currentParams = Object.fromEntries([...searchParams]);
    setSearchParams({ ...currentParams, ...obj });
  });

  if (candidatesData.error) {
    return <div>something went wrong...</div>;
  }

  return (
    <S.Container>
      <Table
        sortBy={candidatesData.sortBy}
        sortingFn={handleSorting}
        filterFn={handleSearch}
        headings={Headings}
        isLoading={showLoader}
        rows={candidatesData.data}
      />
    </S.Container>
  );
};

export default Main;
