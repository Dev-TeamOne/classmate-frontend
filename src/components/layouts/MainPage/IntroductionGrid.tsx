import { HTMLAttributes } from 'react';
import styled from 'styled-components';
// TODO: 절대경로 (@styles, @components)
import { Box } from '../../../styles/common';
import Icon from '../../Icon/Icon';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  list: Array<Introduction>;
}

function IntroductionGrid({ list, ...rest }: Props) {
  return (
    <Container {...rest}>
      {list?.map((item: Introduction, index: number) => (
        <Item key={index}>
          <ItemHeader>
            <Icon name={item.icon} size={35} color={'primary1'} />
            <div>{item.title}</div>
          </ItemHeader>
          <ItemBody>{item.contents}</ItemBody>
        </Item>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Item = styled(Box)`
  margin: 20px;
  width: 658px;
  height: 341px;
  border-radius: 30px;
  box-shadow: ${({ theme }) => theme.shadow.dropdown};
`;

const ItemHeader = styled.div`
  text-align: center;
  padding: 86px 273px 0 273px;

  div {
    // TODO: theme 영향도 체크하고 수정
    font-size: 24px;
    line-height: 28px;
    padding: 25px 0 20px 0;
    color: ${({ theme }) => theme.colors.titleActive};
    font-weight: ${({ theme }) => theme.fontWeight.title};
  }
`;

const ItemBody = styled.div`
  padding: 0 80px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.grey1};
  font-size: ${({ theme }) => theme.typo.small};
  font-weight: ${({ theme }) => theme.fontWeight.text};
`;

export default IntroductionGrid;
