import { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

function PollPage() {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <Container>
      <Header title='Polls' onClickMenu={() => setOpen(!open)} />
      <Sidebar activeMenu='Polls' open={open} />
    </Container>
  );
}

export default PollPage;

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: hidden;
`;
