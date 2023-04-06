// import React, { useState } from "react";
// import Input from "../Input";

// const Filter = ({ filterFn }) => {
//   const [query, setQuery] = useState("");

//   const onChangeHandler = (e) => {
//     setQuery(e.target.value);
//     changeHandlerFn(e.target.value);
//   };

//   const filterKeys = ["name", "position_applied", "status"];

//   [
//     { label: "Name", value: "name" },
//     { label: "Position Applied", value: "position_applied" },
//     {},
//   ];

//   return (
//     <>
//       <select>
//         {filterKeys.map((item) => {
//           <option value={item} onClick={filterFn}>
//             {item}
//           </option>;
//         })}
//       </select>
//       <input type="text" value={query} onChange={onChangeHandler} />;
//     </>
//   );
// };

// export default Filter;
