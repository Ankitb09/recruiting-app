import React, { useState } from "react";

const Input = ({ changeHandlerFn }) => {
  const [value, setValue] = useState("");

  const onChangeHandler = (e) => {
    setValue(e.target.value);
    changeHandlerFn(e.target.value);
  };

  return <input type="text" value={value} onChange={onChangeHandler} />;
};

export default Input;
