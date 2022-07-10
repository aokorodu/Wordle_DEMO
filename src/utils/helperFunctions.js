export const isALetter = (key) => {
  const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (alpha.indexOf(key) == -1) return false;
  return true;
};


export  const getLetter = (event) => {
  return event.key.toUpperCase();
};