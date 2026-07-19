export const getFromDB = (key) => {
  const returnedData = localStorage.getItem(key);

  if (returnedData) {
    return JSON.parse(returnedData);
  }
};
