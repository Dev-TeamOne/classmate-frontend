import { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

function QnAPage() {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <Container>
      <Header title='Q&A' onClickMenu={() => setOpen(!open)} />
      <Sidebar activeMenu='Q&A' open={open} />
    </Container>
  );
}

export default QnAPage;

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: hidden;
`;
