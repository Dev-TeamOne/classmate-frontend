export const colors = {
  primary1: '#4B9BFA',
  primary2: '#BFDBFD',
  primary3: '#005DCC',
  primary4: '#F1FAFF',
  error: '#F45452',
  offWhite: '#F6F6F6',
  grey3: '#D7D7D7',
  grey2: '#BBBBBB',
  grey1: '#888888',
  titleActive: '#000000',
  white: '#FFFFFF',
  background: '#F9F9F9',
  red: '#F53C17',
  orange: '#F79D13',
};

const shadow = {
  dropdown: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  weak: `0px 3px 2px 0px #0000001A;
  `,
};

const typo = {
  xxlarge: '32px',
  xlarge: '28px',
  large: '18px',
  medium: '16px',
  small: '16px',
  xsmall: '14px',
};

const fontWeight = {
  light: 400,
  text: 500,
  bold: 700,
  title: 700,
};

export const theme = {
  colors,
  shadow,
  typo,
  fontWeight,
};

export type ColorType = Record<keyof typeof colors, string>;
