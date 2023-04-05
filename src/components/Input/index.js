import React, { useState } from "react";

const Input = ({ changeHandlerFn }) => {
  const [query, setQuery] = useState("");

  const onChangeHandler = (e) => {
    setQuery(e.target.value);
    changeHandlerFn(e.target.value);
  };

  return <input type="text" value={query} onChange={onChangeHandler} />;
};

export default Input;
