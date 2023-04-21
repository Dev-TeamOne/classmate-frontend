import { HTMLAttributes, memo } from 'react';
import { Channel } from './types';
import styled from 'styled-components';
import Icon from '../Icon/Icon';
import { format } from 'date-fns';
import { convertToChannelCode } from '../../utils/common';
import Dropdown from '../Dropdown';

export interface Props extends HTMLAttributes<HTMLLIElement> {
  item: Channel;
  type?: 'created' | 'participated';
}

function ChannelItem({ item, type = 'created', ...rest }: Props) {
  const { name, code, created } = item;

  const getDate = (date: Date) =>
    `${format(date, 'd')} ${format(date, 'LLLL')}, ${format(date, 'Y')}`;

  const dropdownOptions =
    type === 'created'
      ? [
          { title: '발표 모드' },
          { title: '참가자 모드', breakAfter: true },
          { title: '링크 복사하기' },
          { title: '삭제하기', emphasis: true },
        ]
      : [{ title: '링크 복사하기' }, { title: '삭제하기', emphasis: true }];

  return (
    <Item {...rest}>
      <Icon name='calendar' size={25} color='grey2' />
      <div style={{ marginRight: '20px' }}>
        <Title>{name}</Title>
        <DateLabel>{getDate(created)}</DateLabel>
      </div>
      <CodeLabel>{convertToChannelCode(code)}</CodeLabel>
      <MoreIcon>
        <Dropdown options={dropdownOptions}>
          <Icon name='more-vertical' size={20} color={'grey1'} style={{ display: '' }} />
        </Dropdown>
      </MoreIcon>
    </Item>
  );
}

export default memo(ChannelItem);

const Item = styled.li`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.grey3};
  border-radius: 8px;
  padding: 12px 20px;
  display: flex;
  gap: 20px;
  align-items: center;
  cursor: pointer;

  :hover {
    background: ${({ theme }) => theme.colors.offWhite};
  }

  :not(:last-child) {
    margin-bottom: 14px;
  }
`;

const Title = styled.span`
  color: ${({ theme }) => theme.colors.primary3};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.typo.small};
  display: block;
  margin-bottom: 5px;
`;

const CodeLabel = styled.span`
  color: ${({ theme }) => theme.colors.titleActive};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.typo.small};
  display: block;
`;

const DateLabel = styled.span`
  color: ${({ theme }) => theme.colors.grey1};
  font-weight: ${({ theme }) => theme.fontWeight.text};
  font-size: ${({ theme }) => theme.typo.xsmall};
`;

const MoreIcon = styled.div`
  margin-left: auto;
  cursor: pointer;
`;
