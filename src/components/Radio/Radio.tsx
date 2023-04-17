import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

export interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: RadioSize;
  label?: string;
}

function Radio({ checked, size = 'medium', disabled = false, label, ...rest }: Props) {
  return (
    <RadioWrapper size={size}>
      <div>
        <input type='radio' disabled={disabled} checked={checked} {...rest} />
        {label ? <span>{label}</span> : null}
      </div>
    </RadioWrapper>
  );
}

export default Radio;

type RadioProps = {
  size: RadioSize;
};

const RadioWrapper = styled.div<RadioProps>`
  --radio-size: ${(props) => (props.size === 'small' ? '15px' : '25px')};
  --radio-margin-right: ${(props) => (props.size === 'small' ? '27px' : '16px')};
  --radio-border: ${(props) => (props.size === 'small' ? '1.5px' : '2.5px')};
  --radio-font-size: ${(props) =>
    props.size === 'small' ? props.theme.typo.xsmall : props.theme.typo.xsmall};
  --radio-checked-circle-size: ${(props) => (props.size === 'small' ? '9px' : '17px')};

  display: inline-block;
  margin-right: var(--radio-margin-right);

  div {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  input[type='radio'] {
    -webkit-appearance: none;
    -moz-appearance: none;
    background-color: #ffff;
    border: var(--radio-border) solid ${(props) => props.theme.colors.grey2};
    width: var(--radio-size);
    height: var(--radio-size);
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
      border: var(--radio-border) solid ${(props) => props.theme.colors.primary1};
      border-radius: 100%;

      &::before {
        position: absolute;
        content: '';
        background-color: ${(props) => props.theme.colors.primary1};
        width: var(--radio-checked-circle-size);
        height: var(--radio-checked-circle-size);
        border-radius: 100%;
      }

      &:disabled {
        border: var(--radio-border) solid ${(props) => props.theme.colors.primary2};
        &::before {
          background-color: ${(props) => props.theme.colors.primary2};
        }
      }
    }
  }

  span {
    font-size: var(--radio-font-size);
    font-weight: ${({ theme }) => theme.fontWeight.light};
    color: ${({ theme }) => theme.colors.grey1};
    line-height: 20px;
  }
`;
