import { HTMLAttributes, CSSProperties } from 'react';
import styled from 'styled-components';
import { ColorType, colors } from '../../styles/theme';

interface Props extends HTMLAttributes<HTMLDivElement> {
  size?: BadgeSize;
  color?: BadgeColor;
  text?: string;
}

function Badge({ size = 'xsmall', color = 'primary1', text, ...rest }: Props) {
  return (
    <BadgeLayout
      size={size}
      color={color in colors ? colors[color as keyof ColorType] : color}
      {...rest}
    >
      {text}
    </BadgeLayout>
  );
}

interface BadgeProps {
  size: BadgeSize;
  color: CSSProperties['color'];
}

const BadgeLayout = styled.div<BadgeProps>`
  --badge-background-color: ${(props) => props.color};
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
