const sortBy = (items, key, sortDirection) => {
  return items.slice(0).sort((a, b) => {
    if (sortDirection === "asc")
      return a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0;

    return a[key] > b[key] ? -1 : a[key] < b[key] ? 1 : 0;
  });
};

export default sortBy;
