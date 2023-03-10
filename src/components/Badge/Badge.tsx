import React from 'react';
import styled from 'styled-components';
import { BadgeSize, BadgeColor } from './types';

interface Props {
  size?: BadgeSize;
  color?: BadgeColor;
  text?: string;
}

function Badge({ size = 'xsmall', color = 'primary1', text, ...rest }: Props) {
  return (
    <BadgeLayout size={size} color={color}>
      {text}
    </BadgeLayout>
  );
}

interface BadgeProps {
  size: BadgeSize;
  color: BadgeColor;
}

const BadgeLayout = styled.div<BadgeProps>`
  --badge-background-color: ${(props) => props.theme.colors[props.color]};
  --badge-font-size: ${(props) => props.theme.typo[props.size]};
  --badge-width: ${(props) => (props.size === 'xsmall' ? '116px' : '174px')};
  --badge-height: ${(props) => (props.size === 'xsmall' ? '35px' : '52.5px')};

  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--badge-width);
  color: ${({ theme }) => theme.colors.white};
  height: var(--badge-height);
  font-size: var(--badge-font-size);
  font-weight: ${({ theme }) => theme.fontWeight.text};
  border-radius: 50px;
  background-color: var(--badge-background-color);
`;

export default Badge;
