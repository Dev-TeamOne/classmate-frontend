export const colorHexRegex = new RegExp(/^#(?:[0-9a-f]{3}){1,2}$/i);

export const isHexColorString = (hex: string) => {
  if (!colorHexRegex.test(hex)) {
    return false;
  }
  return true;
};
