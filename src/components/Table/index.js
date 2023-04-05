import React from "react";
import SortingIcons from "../SortingIcons";
import TableRow from "../TableRow";
import * as S from "./styles";

const Table = ({ sorting, sortingFn, headings, isLoading, candidates }) => {
  return (
    <S.TableContainer>
      <S.TableHeader>
        {headings.map((item) => (
          <S.Th isArrowVisible={item.sortable} key={item.key}>
            {item.label}
            {item.sortable && !isLoading && (
              <SortingIcons
                sortingDirection={sorting.sortingDirection}
                isCurrentSorted={item.key === sorting.sortByKey}
                handleUpClick={() => {
                  sortingFn(item.key, "asc");
                }}
                handleDownClick={() => {
                  sortingFn(item.key, "desc");
                }}
              />
            )}
          </S.Th>
        ))}
      </S.TableHeader>

      {isLoading
        ? "loading.."
        : candidates?.map((item) => <TableRow key={item.id} item={item} />)}
    </S.TableContainer>
  );
};

export default Table;
