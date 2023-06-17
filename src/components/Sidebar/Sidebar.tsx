import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import IconButton from '../IconButton/IconButton';
import useMovePage from '../../hooks/useMovePage';

export interface Props extends HTMLAttributes<HTMLElement> {
  activeMenu: PageTitleType;
  open?: boolean;
}

function Sidebar({ activeMenu, open, ...rest }: Props) {
  const { setPage } = useMovePage();

  return (
    <>
      {open ? (
        <SidebarWrapper {...rest}>
          <IconButton
            name={'question-answer'}
            size={30}
            color={activeMenu === 'Q&A' ? 'primary1' : 'grey1'}
            onClick={() => setPage('/qna')}
          />
          <IconButton
            name={'poll-fill'}
            size={30}
            color={activeMenu === 'Polls' ? 'primary1' : 'grey1'}
            onClick={() => setPage('/polls')}
          />
        </SidebarWrapper>
      ) : null}
    </>
  );
}

export default Sidebar;

const SidebarWrapper = styled.aside`
  height: 100%;
  width: 70px;
  max-width: 70px;
  min-width: 70px;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 37px;
  gap: 30px;
`;
