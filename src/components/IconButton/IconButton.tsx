import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import Icon, { IconProps } from '../Icon';

export interface Props
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'name'>,
    Pick<IconProps, 'name' | 'color' | 'size'> {}

function IconButton({ name, color, size, ...rest }: Props) {
  return (
    <IconButtonWrapper {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      <Icon name={name} color={color} size={size} />
    </IconButtonWrapper>
  );
}

export default IconButton;

const IconButtonWrapper = styled.button`
  box-shadow: none;
  overflow: visible;
  cursor: pointer;
  border-radius: 0;
  border: none;
  padding: 0;
  background: inherit;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover:not(:disabled),
  :focus-visible:not(:disabled) {
    opacity: 0.7;
  }
`;
