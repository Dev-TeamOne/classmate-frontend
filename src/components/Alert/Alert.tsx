import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import Icon from '../Icon';
import { AlertColors, Theme } from './types';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  theme?: Theme;
  hasCloseButton?: boolean;
}

function Alert({ theme = 'info', children, hasCloseButton = false, style, ...rest }: Props) {
  return (
    <AlertLayout
      style={{
        borderColor: AlertColorByTheme[theme].border,
        backgroundColor: AlertColorByTheme[theme].background,
        ...style,
      }}
      {...rest}
    >
      <Icon name={AlertIconByTheme[theme]} size={20} color={AlertColorByTheme[theme].icon} />
      <div>{children}</div>
      {hasCloseButton ? (
        <Icon name='close' size={12} color={'grey1'} className='alert-right-close-button' />
      ) : null}
    </AlertLayout>
  );
}

export default Alert;

const AlertColorByTheme: Record<Theme, AlertColors> = {
  info: { background: '#DFF2FF', border: '#79BFFD', icon: '#005FFC' },
  success: { background: '#F2FFEB', border: '#A0EB86', icon: '#00C021' },
  warning: { background: '#FFFBE3', border: '#FFE587', icon: '#FFA825' },
  error: { background: '#FFF0EE', border: '#FFC6C0', icon: '#FF464A' },
};

const AlertIconByTheme: Record<Theme, string> = {
  info: 'info-rounded',
  warning: 'info-rounded',
  success: 'check-circle-rounded',
  error: 'close-circle',
};

const AlertLayout = styled.div`
  background: #dff2ff;
  border: 1px solid #fff;
  border-radius: 10px;
  padding: 15px 30px 15px 15px;
  display: flex;
  align-items: center;
  gap: 14px;
  width: fit-content;
  font-size: ${({ theme }) => theme.typo.small};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  line-height: 20px;

  .alert-right-close-button {
    margin-left: auto;
  }
`;
