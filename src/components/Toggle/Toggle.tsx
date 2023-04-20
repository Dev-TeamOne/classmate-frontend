import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

export interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: ToggleSize;
}

function Toggle({ size = 'small', disabled, defaultChecked = false, ...rest }: Props) {
  return (
    <ToggleSwitch size={size}>
      <input type='checkbox' defaultChecked={defaultChecked} disabled={disabled} {...rest} />
      <span></span>
    </ToggleSwitch>
  );
}

export default Toggle;

type ToggleSwitchType = Pick<Props, 'size'>;

const ToggleSwitch = styled.label<ToggleSwitchType>`
  --toggle-size: ${(props) => (props.size === 'medium' ? '70px' : '40px')};
  --toggle-circle-size: ${(props) => (props.size === 'medium' ? '33px' : '18px')};
  --primary-color: ${({ theme }) => theme.colors.primary1};
  --white-color: ${({ theme }) => theme.colors.white};

  position: relative;
  display: inline-block;
  width: var(--toggle-size);
  height: calc(var(--toggle-size) / 2);

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--white-color);
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

    :before {
      position: absolute;
      content: '';
      height: var(--toggle-circle-size);
      width: var(--toggle-circle-size);
      left: 1px;
      bottom: 1px;
      background-color: white;
      -webkit-transition: 0.4s;
      transition: 0.4s;
      border-radius: 50%;
      background-color: var(--primary-color);
    }
  }

  input:checked + span {
    background-color: var(--primary-color);
  }

  input:checked + span:before {
    -webkit-transform: translateX(calc(var(--toggle-size) / 2));
    -ms-transform: translateX(calc(var(--toggle-size) / 2));
    transform: translateX(calc(var(--toggle-size) / 2));
    background-color: var(--white-color);
  }

  input:disabled + span {
    background-color: ${({ theme }) => theme.colors.offWhite};
    cursor: not-allowed;
  }

  input:disabled + span:before {
    background-color: ${({ theme }) => theme.colors.grey2};
  }
`;
