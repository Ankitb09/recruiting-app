const removeEmptyKeys = (obj) => {
  return Object.keys(obj)
    .filter(function (k) {
      return obj[k] != "";
    })
    .reduce(function (acc, k) {
      acc[k] = obj[k];
      return acc;
    }, {});
};

export default removeEmptyKeys;
