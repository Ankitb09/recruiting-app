import styled, { css } from "styled-components";

export const TableContainer = styled.div`
  border: 1px solid ${(props) => props.theme.palette.borderColor};
`;

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 14%);
  padding: 10px 0;
`;

export const Th = styled.div`
  padding: 5px;
  ${({ isArrowVisible }) =>
    isArrowVisible &&
    css`
      display: flex;
    `}
`;
