export const colorHexRegex = new RegExp(/^#(?:[0-9a-f]{3}){1,2}$/i);

export const isHexColorString = (hex: string) => {
  if (!colorHexRegex.test(hex)) {
    return false;
  }
  return true;
};

export const convertToChannelCode = (code: string) => {
  return `${code.substring(0, 3)}-${code.substring(3, 6)}-${code.substring(6, 9)}`;
};

export const classmateGithubURL = 'https://github.com/Dev-TeamOne';
