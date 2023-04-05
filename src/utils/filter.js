const filter = (data, search, keys) => {
  const lowSearch = search.toLowerCase();
  return data.filter((item) =>
    keys.some((key) => String(item[key]).toLowerCase().includes(lowSearch))
  );
};

export default filter;
