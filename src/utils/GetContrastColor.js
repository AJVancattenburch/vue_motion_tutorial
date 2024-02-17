// Usage: import { getContrastColor } from './utils/GetContrastColor';
// description: This function will take a hex color and return the contrast color.
// Implementation in component:
// const contrastColor = getContrastColor(randomColor());
// randomColor() is defined by the function in ColorRandomizer.js and will return a random hex color that will be passed to getContrastColor() to return the contrast color, using both functions together creates a random color and its contrast color.
export const getContrastColor = (hexColor) => {
  let r = parseInt(hexColor.substr(1, 2), 16);
  let g = parseInt(hexColor.substr(3, 2), 16);
  let b = parseInt(hexColor.substr(5, 2), 16);
  let yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? "#000000" : "#ffffff";
};