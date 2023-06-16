import { useState } from 'react';
import styled from 'styled-components';
import Header from '@components/Header';
import Sidebar from '@components/Sidebar';
import { CommonFab, PollSelectionField, PollWrapper } from '@components/layouts';
import Button from '@components/Button/Button';
import Steps from '@components/Steps';
import Result from '@components/Result';

function PollPage() {
  const [open, setOpen] = useState<boolean>(true);
  const [isHost, setIsHost] = useState<boolean>(true);

  const stepItems = [
    {
      title: 'Select new poll type.',
      description: '원하는 형태의 Poll을 선택합니다.',
    },
    {
      title: 'Customize your poll.',
      description: '해당 Poll의 조건들을 입력합니다.',
    },
    {
      title: 'Start a poll.',
      description: '완성된 Poll을 시작합니다.',
    },
  ];

  return (
    <Container>
      <Header title='Polls' onClickMenu={() => setOpen(!open)} />
      <Main>
        <Sidebar activeMenu='Polls' open={open} />
        <Contents>
          <PollWrapper
            title='Create your poll'
            subTitle='What would you like to create?'
            rightAddon={<Button>Show List</Button>}
            contentTitle='Getting Started'
            contentSubTitle='What would you like to create?'
          >
            <Inner>
              <Steps current={1} items={stepItems} />
              <InnerBottom>
                <PollSelectionField />
                <Result
                  title='Empty polls !'
                  subTitle={'You can add polls by following upper steps.'}
                  status='info'
                />
              </InnerBottom>
            </Inner>
          </PollWrapper>
          <CommonFab />
        </Contents>
      </Main>
    </Container>
  );
}

export default PollPage;

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: hidden;
`;

const Main = styled.main`
  display: flex;
  height: inherit;
`;

const Contents = styled.section`
  width: 100%;
  height: 100%;
`;

const Inner = styled.div`
  margin-top: 40px;
`;

const InnerBottom = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.7fr;
  gap: 20px;
  margin-top: 40px;
`;
