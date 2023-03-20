import React, { Children, cloneElement, InputHTMLAttributes, ReactElement } from 'react';
import styled from 'styled-components';

export interface SingleLineInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  multiline?: boolean;
  leftAddon?: ReactElement;
  disabled?: boolean;
}

function TextField(props: SingleLineInputProps) {
  const {
    leftAddon,
    placeholder = '플레이스 홀더',
    disabled = false,
    ...rest
  } = props as SingleLineInputProps;
  const left = leftAddon != null ? Children.only(leftAddon) : null;

  return (
    <InputWrapper disabled={disabled} leftAddon={leftAddon}>
      {left != null
        ? cloneElement(left, {
            ...left.props,
            className: 'input-icon',
          })
        : null}
      <input
        type='text'
        placeholder={placeholder}
        disabled={disabled}
        {...(rest as SingleLineInputProps)}
      />
    </InputWrapper>
  );
}

export default TextField;

type InputWrapperType = Pick<SingleLineInputProps, 'disabled' | 'leftAddon'>;

const InputWrapper = styled.div<InputWrapperType>`
  position: relative;
  width: 100%;

  .input-icon {
    position: absolute;
    margin-left: 30px;
    top: 50%;
    transform: translate(0, -50%);
    pointer-events: ${(props) => (props.disabled ? 'none' : 'inherit')};
    opacity: ${(props) => (props.disabled ? 0.5 : 1)};

    svg {
      [fill] {
        &:not([fill='none']) {
          fill: ${({ theme }) => theme.colors.grey2};
        }
      }

      [stroke] {
        &:not([stroke='none']) {
          stroke: ${({ theme }) => theme.colors.grey2};
        }
      }
    }
  }

  input {
    --textfield-padding: ${(props) => (props.leftAddon ? '30px 30px 30px 87px' : '30px')};

    background: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.grey3};
    border-radius: 20px;
    color: ${({ theme }) => theme.colors.titleActive};
    box-shadow: ${({ theme }) => theme.shadow.weak};
    padding: var(--textfield-padding);
    font-size: ${({ theme }) => theme.typo.large};
    font-weight: ${({ theme }) => theme.fontWeight.text};

    ::placeholder {
      color: ${({ theme }) => theme.colors.grey2};
    }

    :disabled {
      background-color: ${({ theme }) => theme.colors.offWhite};
      cursor: not-allowed;
    }

    :hover:not(:disabled),
    :focus:not(:disabled),
    :active:not(:disabled) {
      outline: none !important;
      border-color: ${({ theme }) => theme.colors.primary1};
      box-shadow: 0 0 2.5px ${({ theme }) => theme.colors.primary1};
    }
  }
`;
