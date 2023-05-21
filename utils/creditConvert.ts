export const creditConvert = (credits: string): string => {
  if (credits === "unknown") return "";
  return Math.ceil(Number(credits) / 1000) + "K";
};
