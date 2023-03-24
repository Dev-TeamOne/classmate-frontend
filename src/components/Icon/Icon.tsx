import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import useDynamicSVGImport from '../../hooks/useDynamicSvgImport';
import { colors, ColorType } from '../../styles/theme';
import { isHexColorString } from '../../utils/common';

export interface Props extends HTMLAttributes<HTMLSpanElement> {
  name: string;
  color?: keyof ColorType | string;
  size?: number;
}

function Icon({ name, color, size = 24, style, ...rest }: Props) {
  const iconSize = `${size}px`;
  const { SvgIcon } = useDynamicSVGImport({ name });
  return (
    <IconWrapper
      style={{
        width: iconSize,
        minWidth: iconSize,
        ...style,
      }}
      {...rest}
    >
      {SvgIcon ? (
        <SvgIcon
          style={{
            width: '100%',
            height: '100%',
            color: color
              ? isHexColorString(color)
                ? color
                : colors[color as keyof ColorType]
              : undefined,
          }}
        />
      ) : null}
    </IconWrapper>
  );
}

export default Icon;

const IconWrapper = styled.span`
  display: inline-block;
  line-height: 0;

  svg {
    width: 100%;
    height: 100%;

    [fill] {
      &:not([fill='none']) {
        fill: currentColor;
      }
    }

    [stroke] {
      &:not([stroke='none']) {
        stroke: currentColor;
      }
    }
  }
`;
