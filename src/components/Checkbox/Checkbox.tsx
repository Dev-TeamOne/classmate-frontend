import React from 'react';
import styled from 'styled-components';
import { CheckboxSize } from './types';

export interface Props {
  defaultChecked?: boolean;
  checked?: boolean;
  size?: CheckboxSize;
  disabled?: boolean;
  label?: string;
}

function Checkbox({
  defaultChecked = false,
  checked,
  size = 'medium',
  disabled = false,
  label,
  ...rest
}: Props) {
  return (
    <CheckboxWrapper size={size}>
      <div>
        <input type='radio' disabled={disabled} checked={checked} {...rest} />
        {label ? <span>{label}</span> : null}
      </div>
    </CheckboxWrapper>
  );
}

export default Checkbox;

type CheckboxProps = {
  size: CheckboxSize;
};

const CheckboxWrapper = styled.div<CheckboxProps>`
  --checkbox-size: ${(props) => (props.size === 'small' ? '15px' : '25px')};
  --checkbox-margin-right: ${(props) => (props.size === 'small' ? '27px' : '16px')};
  --checkbox-border: ${(props) => (props.size === 'small' ? '1.5px' : '2.5px')};
  --checkbox-font-size: ${(props) =>
    props.size === 'small' ? props.theme.typo.xsmall : props.theme.typo.xsmall};
  --checkbox-checked-circle-size: ${(props) => (props.size === 'small' ? '9px' : '17px')};

  display: inline-block;
  margin-right: var(--checkbox-margin-right);

  div {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  input[type='radio'] {
    -webkit-appearance: none;
    -moz-appearance: none;
    background-color: #ffff;
    border: var(--checkbox-border) solid ${(props) => props.theme.colors.grey2};
    width: var(--checkbox-size);
    height: var(--checkbox-size);
    border-radius: 100%;
    margin: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: border 0.5s ease-in-out;

    &:hover {
      opacity: 0.7;
      cursor: pointer;
    }

    &:disabled {
      box-shadow: none;
      cursor: not-allowed;

      &:hover {
        opacity: 1;
      }
    }

    &:checked {
      border: var(--checkbox-border) solid ${(props) => props.theme.colors.primary1};
      border-radius: 100%;

      &::before {
        position: absolute;
        content: '';
        background-color: ${(props) => props.theme.colors.primary1};
        width: var(--checkbox-checked-circle-size);
        height: var(--checkbox-checked-circle-size);
        border-radius: 100%;
      }

      &:disabled {
        border: var(--checkbox-border) solid ${(props) => props.theme.colors.primary2};
        &::before {
          background-color: ${(props) => props.theme.colors.primary2};
        }
      }
    }
  }

  span {
    font-size: var(--checkbox-font-size);
    font-weight: ${({ theme }) => theme.fontWeight.light};
    color: ${({ theme }) => theme.colors.grey1};
    line-height: 20px;
  }
`;
