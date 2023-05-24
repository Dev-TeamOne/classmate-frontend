import Modal from '@components/Modal/Modal';
import DatePicker from '@components/DatePicker/DatePicker';
import Input from '@components/Input/Input';
import Select from '@components/Select';
import styled from 'styled-components';
import Alert from '@components/Alert/Alert';
import ChannelList from '@components/ChannelList/ChannelList';
import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import { ReactComponent as LogoImage } from '../assets/logos/logo-with-name-white.svg';
import BackgroundImage from '../assets/images/background.png';
import Button from '@components/Button/Button';
import useModal from '@hooks/useModal';

function MainPage() {
  const { ref, isOpen, setIsOpen } = useModal({ initialMode: false });

  // NOTE: 테스트용 샘플 데이터
  const list = [
    { name: `Hyewon's Event 1`, code: '123456789', created: new Date() },
    { name: `Hyewon's Event 2`, code: '123456789', created: new Date() },
    { name: `Hyewon's Event 3`, code: '123456789', created: new Date() },
    { name: `Hyewon's Event 4`, code: '123456789', created: new Date() },
    { name: `Hyewon's Event 5`, code: '123456789', created: new Date() },
    { name: `Hyewon's Event 6`, code: '123456789', created: new Date() },
  ];

  return (
    <>
      <Header type='main' />
      <TopSection>
        <LogoImage />
      </TopSection>
      <Main>
        <section style={{ marginBottom: '100px' }}>
          <ChannelTitleSection>
            <ChannelTitle>My Channels</ChannelTitle>
            <Button onClick={() => setIsOpen(!isOpen)}>Create Channel</Button>
          </ChannelTitleSection>
          <ChannelList list={list} />
        </section>
        <section>
          <ChannelTitleSection>
            <ChannelTitle>Participated Channels</ChannelTitle>
          </ChannelTitleSection>
          <ChannelList list={list} type={'participated'} />
        </section>
      </Main>
      <Footer />
      {isOpen && (
        <Modal
          ref={ref}
          title='채널 생성하기'
          open={true}
          setIsOpen={setIsOpen}
          bottomAddon={<Alert>Anyone with the code or link can participate</Alert>}
        >
          <div>
            <div style={{ display: 'flex', gap: '22px' }}>
              <div
                style={{
                  display: 'flex',
                  gap: '16px',
                  flexDirection: 'column',
                  marginBottom: '24px',
                  width: '100%',
                }}
              >
                <span>시작 날짜</span>
                <DatePicker />
              </div>
              <div
                style={{
                  display: 'flex',
                  gap: '16px',
                  flexDirection: 'column',
                  marginBottom: '24px',
                  width: '100%',
                }}
              >
                <span>종료 날짜</span>
                <DatePicker />
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                gap: '16px',
                flexDirection: 'column',
                marginBottom: '24px',
              }}
            >
              <span>채널 이름을 입력하세요.</span>
              <Input placeholder='Channel name' />
            </div>
            <div
              style={{
                display: 'flex',
                gap: '16px',
                flexDirection: 'column',
                marginBottom: '24px',
              }}
            >
              <span>최대 참가 가능 인원을 입력하세요.</span>
              <Select
                width={681}
                options={[{ title: '1-25' }, { title: '1-50' }, { title: '1-100' }]}
                defaultOption={{ title: '1-100' }}
              />
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}

export default MainPage;

const TopSection = styled.section`
  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  height: 500px;
  width: 100%;

  svg {
    transform: translate(50%, 400%);
  }
`;

const Main = styled.main`
  padding: 100px 200px;
`;

const ChannelTitleSection = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 60px;
  align-items: center;
`;

const ChannelTitle = styled.h1`
  font-weight: ${({ theme }) => theme.fontWeight.title};
  font-size: ${({ theme }) => theme.typo.xlarge};
  color: ${({ theme }) => theme.colors.titleActive};
`;
