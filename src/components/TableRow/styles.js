import styled from "styled-components";

export const RowWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 14%);
  overflow-wrap: break-word;
  padding: 10px 0;

  &:nth-child(odd) {
    background-color: #f2f2f2;
    color: #000;
  }
  &:hover {
    background-color: #d7d4d4;
  }
`;

export const Td = styled.div`
  padding: 5px;
`;
