export const padZeros = num => {
  switch (true) {
    case num < 10:
      return `00${num}`;
    case num > 10 && num < 100:
      return `0${num}`;
    default:
      return num;
  }
};
