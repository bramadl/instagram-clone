export const toDoublePrecision = (number) => {
  let temp = Number(number);
  let precision = null;
  
  let million = temp / 1000000 > 1 ? temp / 1000000 : false;
  if (million) {
    temp = million;
    precision = "M";

    return `${temp.toFixed(2)}${precision}`;
  }

  let thousand = temp / 1000 > 1 ? temp / 1000 : false;
  if (thousand) {
    temp = thousand;
    precision = "K";

    return `${temp.toFixed(2)}${precision}`;
  }

  return `${temp}`;
}