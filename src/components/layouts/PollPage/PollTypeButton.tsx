import Icon from '@components/Icon';
import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import { PollType } from './utils';
import { ResetButton } from '@styles/common';

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

function PollTypeButton({ children, ...rest }: Props) {
  return (
    <TypeButton type='button' {...rest}>
      <Icon name={ButtonIconByName[children as PollType]} color={'primary1'} size={40} />
      <p>{children}</p>
    </TypeButton>
  );
}

export default PollTypeButton;

const ButtonIconByName: Record<PollType, string> = {
  '투표/설문조사': 'poll',
  퀴즈: 'quiz',
  '오픈 채팅': 'chat',
  '워드 클라우드': 'cloud',
  별점: 'star-outline',
  랭킹: 'ranking',
};

const TypeButton = styled(ResetButton)`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.grey3};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;
  max-width: 180px;
  height: 140px;

  :active,
  :focus {
    box-shadow: ${({ theme }) => theme.shadow.weak};
  }
`;
