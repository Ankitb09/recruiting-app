import React from "react";
import SortingIcons from "../SortingIcons";
import Input from "../Input";
import TableRow from "../TableRow";
import * as S from "./styles";

const Table = ({ sortBy, sortingFn, filterFn, headings, isLoading, rows }) => {
  return (
    <S.TableContainer>
      <S.TableHeader>
        {headings.map((item) => {
          const { label, key, sortable, filterable } = item;
          return (
            <>
              <S.Th isArrowVisible={sortable} key={key}>
                {label}
                {sortable && !isLoading && (
                  <SortingIcons
                    sortingDirection={sortBy[key]}
                    isCurrentSorted={key === Object.keys(sortBy)[0]}
                    handleUpClick={() => {
                      sortingFn(key, "asc");
                    }}
                    handleDownClick={() => {
                      sortingFn(key, "desc");
                    }}
                  />
                )}
                {filterable && !isLoading && (
                  <S.InputWrapper>
                    <Input
                      changeHandlerFn={(val) => {
                        filterFn(key, val);
                      }}
                    />
                  </S.InputWrapper>
                )}
              </S.Th>
            </>
          );
        })}
      </S.TableHeader>

      {isLoading
        ? "loading.."
        : rows?.map((item) => <TableRow key={item.id} item={item} />)}
    </S.TableContainer>
  );
};

export default Table;
