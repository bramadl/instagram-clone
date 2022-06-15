export const toLowerCase = (text) => {
  return String(text).toLocaleLowerCase();
}

export const trimAtMost = (text, length = 50) => {
  return String(text).slice(0, length) + "...";
}
