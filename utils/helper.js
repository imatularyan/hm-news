export const checkURL = (url) => {
  const res = url.match(/\.(jpeg|jpg|gif|png)$/) != null;
  return res;
};
