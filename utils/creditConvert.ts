export const creditConvert = (
  credits: string,
  divider = 1000000000
): string => {
  if (credits === "unknown") return "out of stock";
  const creditsNumber = Number(credits);
  const unitPrefixes = {
    1000: "K",
    1000000: "M",
    1000000000: "B",
  };

  if (creditsNumber / divider > 1) {
    return (
      (creditsNumber / divider).toPrecision(4) +
      unitPrefixes[divider as keyof typeof unitPrefixes] +
      " ₹"
    );
  }
  divider /= 1000;
  return creditConvert(credits, divider);
};
