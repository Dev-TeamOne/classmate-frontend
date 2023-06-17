import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import Icon from '../Icon';
import { generateColor } from './utils';
import AvatarGroup from './AvatarGroup';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  size?: number;
  src?: string;
  firstName?: string;
  lastName?: string;
  isLogin?: boolean;
  isActive?: boolean;
  color?: string;
}

function Avatar({
  size = 32,
  src,
  firstName,
  lastName,
  isLogin,
  isActive,
  color,
  children,
  ...rest
}: Props) {
  // TODO: 추후 회원가입 시 해당 유저의 색상 recoil로 저장해서 유지하기
  return (
    <AvatarWrapper size={size} isActive={isActive} className={'avatar-circle'}>
      <AvatarCircle
        color={color ? color : firstName || lastName ? generateColor() : undefined}
        {...rest}
      >
        {children ? (
          children
        ) : src ? (
          <img src={src} width={`${size}`} height={`${size}`} />
        ) : firstName || lastName ? (
          <>
            {firstName?.charAt(0).toUpperCase()}
            {lastName?.charAt(0).toUpperCase()}
          </>
        ) : (
          <Icon name={'account-circle'} size={size} color={isLogin ? 'primary3' : 'grey2'} />
        )}
      </AvatarCircle>
    </AvatarWrapper>
  );
}

export default Avatar;

Avatar.Group = AvatarGroup;

const AvatarWrapper = styled.div<{ size: number; isActive?: boolean }>`
  --dot-size: ${({ size }) => `${size * 0.25}px`};

  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  font-size: ${({ size }) => `${size * 0.5}px`};
  position: relative;

  ::after {
    display: ${({ isActive }) => (isActive === undefined ? 'none' : 'visible')};
    position: absolute;
    content: '';
    border-radius: 50%;
    width: var(--dot-size);
    height: var(--dot-size);
    background-color: ${({ isActive }) => (isActive ? '#66b535' : '#c6c5c5')};
    border: 1px solid white;
    bottom: 0;
    right: 0;
  }
`;

export const AvatarCircle = styled.div<{ color?: string }>`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  overflow: hidden;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: white;
  word-break: break-all;

  img {
    object-fit: cover;
  }
`;
