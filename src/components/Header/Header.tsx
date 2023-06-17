import { HTMLAttributes, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import IconButton from '../IconButton/IconButton';
import LogoImage from '../../assets/logos/logo-with-name-primary.svg';
import Avatar from '../Avatar';
import useMovePage from '../../hooks/useMovePage';

export interface Props extends HTMLAttributes<HTMLHeadElement> {
  type?: 'main' | 'default';
  title?: PageTitleType;
  onClickMenu?: () => void;
}

function Header({ type = 'default', onClickMenu, title, ...rest }: Props) {
  const { setPage } = useMovePage();

  return type === 'main' ? (
    <MainHeader {...rest}>
      <IconButton name={'account-circle'} size={25} />
    </MainHeader>
  ) : (
    <DefaultHeader>
      <Area align={'left'}>
        <IconButton
          name={'menu'}
          size={22}
          style={{ paddingLeft: '28px', paddingRight: '37px' }}
          onClick={onClickMenu}
        />
        <Logo src={LogoImage} onClick={onClickMenu} />
        <Title>{title}</Title>
      </Area>
      <Area align={'center'}>
        <ChannelInfo>
          <ChannelCreatedDate>February, 2023</ChannelCreatedDate>
          <ChannelCode>123-456-789</ChannelCode>
        </ChannelInfo>
        <IconButton name={'arrow-down'} size={18} color={'grey1'} />
      </Area>
      <Area align={'right'}>
        {/* TODO: 추후 사용자 전체 불러와 group으로 표시 */}
        <Avatar.Group max={4} size={25}>
          <Avatar firstName='A' lastName='Kang' />
          <Avatar firstName='B' />
          <Avatar firstName='C' />
          <Avatar firstName='D' />
          <Avatar firstName='E' />
        </Avatar.Group>
        <IconButton
          name={'account-circle'}
          size={25}
          style={{ paddingLeft: '20px', paddingRight: '25px' }}
        />
      </Area>
    </DefaultHeader>
  );
}

export default Header;

const MainHeader = styled.header`
  float: right;
  margin-right: 22px;
  margin-top: 18px;
`;

const DefaultHeader = styled.header`
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadow.dropdown};
  padding: 18px 0;
  align-items: center;
  position: sticky;
  top: 0;
`;

const Area = styled.div<{ align?: 'left' | 'right' | 'center' }>`
  display: flex;
  justify-content: ${({ align }) => align};
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.titleActive};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.typo.large};
  padding-left: 44px;
`;

const ChannelInfo = styled.div`
  text-align: center;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.typo.small};
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-right: 27px;
`;

const ChannelCreatedDate = styled.p`
  color: ${({ theme }) => theme.colors.grey1};
`;

const ChannelCode = styled.p`
  color: ${({ theme }) => theme.colors.titleActive};
`;

const Logo = styled.img`
  cursor: pointer;
`;
