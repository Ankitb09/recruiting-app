import React from "react";
import {
  IconCaretUp,
  IconCaretUpFill,
  IconCaretDown,
  IconCaretDownFill,
} from "../../icons";
import * as S from "./styles";

const SortingIcons = ({
  sortingDirection,
  isCurrentSorted,
  handleUpClick,
  handleDownClick,
}) => {
  const handleUpArrowClick = () => {
    handleUpClick();
  };

  const handleDownArrowClick = () => {
    handleDownClick();
  };

  return (
    <S.Wrapper>
      {isCurrentSorted && sortingDirection === "asc" ? (
        <IconCaretUpFill />
      ) : (
        <IconCaretUp onClick={handleUpArrowClick} />
      )}

      {isCurrentSorted && sortingDirection === "desc" ? (
        <IconCaretDownFill />
      ) : (
        <IconCaretDown onClick={handleDownArrowClick} />
      )}
    </S.Wrapper>
  );
};

export default SortingIcons;
