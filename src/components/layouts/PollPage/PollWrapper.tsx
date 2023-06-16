import { HTMLAttributes, ReactElement } from 'react';
import styled from 'styled-components';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subTitle: string;
  rightAddon?: ReactElement;
  contentTitle: string;
  contentSubTitle: string;
}

function PollWrapper({
  title,
  subTitle,
  rightAddon,
  contentTitle,
  contentSubTitle,
  children,
  ...rest
}: Props) {
  return (
    <Wrapper {...rest}>
      <TitleHeader>
        <div>
          <Title>{title}</Title>
          <SubTitle>{subTitle}</SubTitle>
        </div>
        {rightAddon}
      </TitleHeader>
      <Box>
        <ContentTitle>{contentTitle}</ContentTitle>
        <ContentSubTitle>{contentSubTitle}</ContentSubTitle>
        <>{children}</>
      </Box>
    </Wrapper>
  );
}

export default PollWrapper;

const Wrapper = styled.div`
  padding: 80px 127px 70px 127px;
`;

const TitleHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.titleActive};
  margin-bottom: 14px;
`;

const SubTitle = styled.h2`
  font-size: ${({ theme }) => theme.typo.medium};
  font-weight: ${({ theme }) => theme.fontWeight.text};
  color: ${({ theme }) => theme.colors.grey1};
`;

const Box = styled.div`
  margin-top: 36px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadow.dropdown};
  padding: 40px 50px;
  border-radius: 20px;
`;

const ContentTitle = styled.h4`
  font-size: ${({ theme }) => theme.typo.large};
  font-weight: ${({ theme }) => theme.fontWeight.text};
  color: ${({ theme }) => theme.colors.titleActive};
  margin-bottom: 14px;
`;

const ContentSubTitle = styled.h5`
  font-size: ${({ theme }) => theme.typo.small};
  font-weight: ${({ theme }) => theme.fontWeight.text};
  color: ${({ theme }) => theme.colors.grey2};
`;
