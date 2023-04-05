import React from "react";
import * as S from "./styles";

const TableRow = ({ item }) => {
  const {
    name,
    email,
    birth_date,
    position_applied,
    status,
    year_of_experience,
    application_date,
  } = item;

  return (
    <>
      <S.RowWrapper>
        <S.Td>{name}</S.Td>
        <S.Td>
          <a href={`mailto:${email}`}>{email}</a>
        </S.Td>
        <S.Td>{birth_date}</S.Td>
        <S.Td>{year_of_experience}</S.Td>
        <S.Td>{position_applied}</S.Td>
        <S.Td>{application_date}</S.Td>
        <S.Td>{status}</S.Td>
      </S.RowWrapper>
    </>
  );
};

export default TableRow;
