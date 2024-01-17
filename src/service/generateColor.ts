export const generateRandomColor = () => {
  const maxColorValue = 16777214;
  const randomColor = '#' + Math.floor(Math.random() * maxColorValue).toString(16);
  return randomColor;
};
