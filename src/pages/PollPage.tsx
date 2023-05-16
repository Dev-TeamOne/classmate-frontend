import { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

function PollPage() {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <Container>
      <Header title='Polls' onClickMenu={() => setOpen(!open)} />
      <Main>
        <Sidebar activeMenu='Polls' open={open} />
        <Contents>{/* 메인 부분 */}</Contents>
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
`;
