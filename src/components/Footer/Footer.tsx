import styled from 'styled-components';
import IconButton from '../IconButton/IconButton';
import { classmateGithubURL } from '../../utils/common';

function Footer() {
  const onClickGitHubBtn = () => {
    window.open(classmateGithubURL, '_blank');
  };

  return (
    <FooterWrapper>
      <IconButton name='github' size={30} onClick={onClickGitHubBtn} />
    </FooterWrapper>
  );
}

export default Footer;

const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
`;
