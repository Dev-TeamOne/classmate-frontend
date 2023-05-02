import { ButtonHTMLAttributes, useState } from 'react';
import styled from 'styled-components';
import Icon from '../Icon';
import FabGroup from './FabGroup';
import Tooltip from './Tooltip';

export interface Props extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  type?: FabButtonType;
  iconName?: string;
  tooltip?: string;
}

function Fab({ type = 'circle', iconName = 'round-plus', tooltip, ...rest }: Props) {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const commonButtonProps = {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
    children: <Icon name={iconName} size={24} color='white' />,
    ...rest,
  };

  return (
    <FabWrapper>
      {type === 'icon' ? (
        <FabIconButton {...commonButtonProps} />
      ) : (
        <FabCircleButton {...commonButtonProps} />
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

const FabWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: fit-content;
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

const FabCircleButton = styled.button`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  border: none;
  background-color: ${({ theme }) => theme.colors.primary1};
  box-shadow: ${({ theme }) => theme.shadow.dropdown};
  cursor: pointer;
  z-index: 2;

  :hover,
  :focus-visible {
    opacity: 0.7;
  }
`;
