import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import Icon from '@components/Icon';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  status?: Status;
  title: string;
  subTitle?: string;
}

function Result({ status = 'info', title, subTitle, children, ...rest }: Props) {
  return (
    <ResultWrapper {...rest}>
      <Icon
        name={ResultIconByStatus[status].name}
        size={60}
        color={ResultIconByStatus[status].color}
        style={{ marginBottom: '30px' }}
      />
      <Title>{title}</Title>
      {subTitle && <SubTitle>{subTitle}</SubTitle>}
      {children && <ChildrenWrapper>{children}</ChildrenWrapper>}
    </ResultWrapper>
  );
}

export default Result;

const ResultIconByStatus: Record<Status, ResultIconInfo> = {
  info: { name: 'info-rounded', color: '#005FFC' },
  success: { name: 'check-circle-rounded', color: '#00C021' },
  warning: { name: 'warning', color: '#FFA825' },
  error: { name: 'close-circle', color: '#FF464A' },
};

const ResultWrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.grey3};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 20px;
  width: inherit;
  height: inherit;
`;

const Title = styled.div`
  color: ${({ theme }) => theme.colors.titleActive};
  font-size: ${({ theme }) => theme.typo.large};
  font-weight: ${({ theme }) => theme.fontWeight.text};
  margin-bottom: 10px;
`;

const SubTitle = styled.div`
  color: ${({ theme }) => theme.colors.grey1};
  font-size: ${({ theme }) => theme.typo.medium};
  font-weight: ${({ theme }) => theme.fontWeight.light};
`;

const ChildrenWrapper = styled.div`
  margin-top: 30px;
`;
