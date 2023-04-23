import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import IconButton from '../IconButton/IconButton';

export interface Props extends HTMLAttributes<HTMLHeadElement> {
  type?: 'main' | 'default';
}

function Header({ type = 'default', ...rest }: Props) {
  return type === 'main' ? (
    <MainHeader {...rest}>
      <IconButton name={'account-circle'} size={25} />
    </MainHeader>
  ) : (
    <DefaultHeader></DefaultHeader>
  );
}

export default Header;

const MainHeader = styled.header`
  float: right;
  margin-right: 22px;
  margin-top: 22px;
`;

const DefaultHeader = styled.header``;
