export const guardNumber = (el: unknown): el is number => {
  return typeof el === "number";
};
