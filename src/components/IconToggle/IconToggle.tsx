import { useState } from 'react';
import { Children, InputHTMLAttributes, ReactElement, cloneElement } from 'react';
import styled from 'styled-components';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  icon: ReactElement;
  unpressedIcon?: ReactElement;
  size?: number;
  defaultPressed?: boolean;
}

function IconToggle({
  icon,
  size = 18,
  unpressedIcon,
  defaultPressed = false,
  disabled,
  ...rest
}: Props) {
  const iconElement = icon && Children.only(icon);
  const unpressedIconElement = unpressedIcon && Children.only(unpressedIcon);
  const [pressed, setPressed] = useState<boolean>(defaultPressed);
  const pressedColor = disabled ? 'primary2' : 'primary1';
  const unpressedColor = disabled ? 'grey3' : 'grey1';

  return (
    <IconToggleSwitch>
      <input
        type='checkbox'
        defaultChecked={defaultPressed}
        disabled={disabled}
        onChange={({ target: { checked } }) => setPressed(checked)}
        {...rest}
      />
      {unpressedIcon ? (
        <>
          {pressed &&
            iconElement &&
            cloneElement(iconElement, {
              ...iconElement.props,
              size,
              color: pressedColor,
            })}
          {unpressedIconElement &&
            !pressed &&
            cloneElement(unpressedIconElement, {
              ...unpressedIconElement.props,
              size,
              color: unpressedColor,
            })}
        </>
      ) : (
        <>
          {iconElement &&
            cloneElement(iconElement, {
              ...iconElement.props,
              size,
              color: pressed ? pressedColor : unpressedColor,
            })}
        </>
      )}
    </IconToggleSwitch>
  );
}

export default IconToggle;

const IconToggleSwitch = styled.label`
  cursor: pointer;
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  input:disabled + span {
    cursor: not-allowed;
  }
`;
