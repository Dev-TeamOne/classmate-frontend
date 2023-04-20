import { withKnobs, text, color, select } from '@storybook/addon-knobs';
import Badge from './Badge';
import Flex from '../Flex';

/**
 * Badge는 숫자 값 또는 적은 텍스트를 설명하기 위한 요소입니다.
 */

export default {
  title: 'Components/Badge',
  component: Badge,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: '뱃지 컴포넌트',
  },
};

export const Basics = () => {
  const props = {
    size: select('size', ['xsmall'], 'xsmall'),
  };

  return (
    <Flex direction='row'>
      <Badge color={'red'} text={'투표/설문조사'} {...props} />
      <Badge color={'orange'} text={'퀴즈'} {...props} />
      <Badge color={'#91D511'} text={'오픈채팅'} {...props} />
      <Badge color={'#2438E5'} text={'워드 클라우드'} {...props} />
      <Badge color={'#5E0BC6'} text={'별점'} {...props} />
      <Badge color={'#E30983'} text={'랭킹'} {...props} />
    </Flex>
  );
};

export const WithKnobs = () => {
  const props = {
    text: text('text', '뱃지'),
    size: select('size', ['xsmall'], 'xsmall'),
    color: color('color', '#4B9BFA'),
  };

  return (
    <Flex direction='row'>
      <Badge {...props} />
    </Flex>
  );
};
