import { ButtonHTMLAttributes, useState } from 'react';
import styled from 'styled-components';
import Icon from '../Icon';
import FabGroup from './FabGroup';
import Tooltip from './Tooltip';

export interface Props extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  shape?: FabButtonShape;
  type?: FabButtonType;
  iconName?: string;
  tooltip?: string;
  position?: FabPosition;
}

function Fab({
  shape = 'circle',
  type = 'default',
  tooltip,
  iconName = 'round-plus',
  position = 'left',
  ...rest
}: Props) {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const commonButtonProps = {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
    children: (
      <Icon
        name={iconName}
        size={24}
        color={type === 'primary' || shape === 'icon' ? 'white' : 'titleActive'}
      />
    ),
    ...rest,
  };

  return (
    <FabWrapper position={position}>
      {shape === 'icon' ? (
        <FabIconButton {...commonButtonProps} />
      ) : (
        <FabCircleButton
          buttonColor={type === 'primary' ? 'primary1' : 'white'}
          {...commonButtonProps}
        />
      )}
      {tooltip && (
        <Tooltip isShown={isHovered} text={tooltip}>
          {tooltip}
        </Tooltip>
      )}
    </FabWrapper>
  );
}

Fab.Group = FabGroup;

export default Fab;

const FabWrapper = styled.div<Pick<Props, 'position'>>`
  display: flex;
  align-items: center;
  position: relative;
  width: fit-content;
  position: ${({ position }) => position !== 'none' && 'fixed'};
  left: ${({ position }) => position === 'left' && '2em'};
  right: ${({ position }) => position === 'right' && '2em'};
  bottom: ${({ position }) => position !== 'none' && '2em'};
`;

const FabIconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    svg {
      [fill] {
        &:not([fill='none']) {
          fill: ${({ theme }) => theme.colors.primary2};
        }
      }

      [stroke] {
        &:not([stroke='none']) {
          stroke: ${({ theme }) => theme.colors.primary2};
        }
      }
    }
  }
`;

const FabCircleButton = styled.button<{ buttonColor: 'primary1' | 'white' }>`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  border: none;
  background-color: ${({ theme, buttonColor }) => theme.colors[buttonColor]};
  box-shadow: ${({ theme }) => theme.shadow.dropdown};
  cursor: pointer;
  z-index: 2;

  :hover,
  :focus-visible {
    opacity: 0.7;
  }
`;
