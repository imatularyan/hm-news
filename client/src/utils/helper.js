export const checkURL = (url) => {
  const data = url.match(/\.(jpeg|jpg|gif|png)$/) != null;
  return data;
};
