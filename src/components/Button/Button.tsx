import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'text' | 'contained' | 'outlined';
  size?: ButtonSize;
  underline?: boolean;
}
function Button({
  variant = 'contained',
  size = 'medium',
  disabled = false,
  underline = true,
  children,
  ...rest
}: Props) {
  switch (variant) {
    case 'text':
      return (
        <TextButton size={size} disabled={disabled} underline={underline} {...rest}>
          {children}
        </TextButton>
      );
    case 'outlined':
      return (
        <OutlinedButton size={size} disabled={disabled} {...rest}>
          {children}
        </OutlinedButton>
      );
    case 'contained':
    default:
      return (
        <ContainedButton size={size} disabled={disabled} {...rest}>
          {children}
        </ContainedButton>
      );
  }
}

export default Button;

type ButtonProps = Pick<Props, 'variant' | 'size' | 'underline'>;

// TODO: any 타입 수정
const ButtonTemplate: any = styled.button<ButtonProps>`
  --button-padding: ${(props) =>
    props.size === 'large' ? '18px 36px' : props.size === 'medium' ? '14px 25px' : '8px 20px'};
  --button-font-size: ${(props) =>
    props.size === 'large' ? '24px' : props.size === 'medium' ? '22px' : '20px'};
  --button-border: ${(props) =>
    props.disabled ? props.theme.colors.primary2 : props.theme.colors.primary1};
  --button-hover-color: #f7fafd;

  background: inherit;
  border: none;
  box-shadow: none;
  padding: 0;
  overflow: visible;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  border-radius: 10px;
  font-weight: ${(props) => props.theme.fontWeight.text};
  font-size: var(--button-font-size);
  padding: var(--button-padding);
`;

const ContainedButton = styled(ButtonTemplate)`
  --button-bgcolor: ${(props) =>
    props.disabled ? props.theme.colors.grey3 : props.theme.colors.primary1};
  --button-border-color: ${(props) =>
    props.disabled ? props.theme.colors.grey1 : props.theme.colors.primary1};
  --button-text-color: ${(props) => props.theme.colors.white};

  border: 1px solid var(----button-border-color);
  background-color: var(--button-bgcolor);
  color: var(--button-text-color);

  :hover:not(:disabled),
  :focus-visible:not(:disabled) {
    opacity: 0.7;
  }
`;

const OutlinedButton = styled(ButtonTemplate)`
  --button-color: ${(props) =>
    props.disabled ? props.theme.colors.grey3 : props.theme.colors.primary1};

  border: 1px solid var(--button-color);
  background-color: ${({ theme }) => theme.colors.white};
  color: var(--button-color);

  :hover:not(:disabled),
  :focus-visible:not(:disabled) {
    background-color: var(--button-hover-color);
  }
`;

const TextButton = styled(ButtonTemplate)`
  --button-color: ${(props) =>
    props.disabled ? props.theme.colors.grey3 : props.theme.colors.primary1};

  color: var(--button-color);
  text-decoration: ${(props) => (props.underline ? 'underline' : 'none')};

  :hover:not(:disabled),
  :focus-visible:not(:disabled) {
    background-color: var(--button-hover-color);
  }
`;
