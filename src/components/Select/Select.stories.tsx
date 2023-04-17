import { withKnobs, object, number, select } from '@storybook/addon-knobs';
import Select from './Select';
import Flex from '../Flex';

/**
 * Select은 옵션들 가운데 값을 선택하는 컴포넌트입니다.
 *
 * 드롭다운 컴포넌트를 이용해 선택지를 보여주며, 인풋 창에서 검색은 불가합니다.
 * 드롭다운 컴포넌트와 같은 방식으로 옵션들을 정의할 수 있어
 * 구분선을 통해 그룹핑이 가능하고, 강조되는 문구는 빨간색으로 나타냅니다.
 */

export default {
  title: 'Components/Select',
  component: Select,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: '셀렉트 컴포넌트',
  },
};

export const Basics = () => {
  return (
    <Flex direction='column' gap='30px'>
      <Select
        options={[
          { title: '발표 모드' },
          { title: '참가자 모드', breakAfter: true },
          { title: '링크 복사하기' },
          { title: '삭제하기', emphasis: true },
        ]}
      />
    </Flex>
  );
};

export const WithKnobs = () => {
  const options = [
    object('option 1', { title: 'Option 1', breakAfter: false, emphasis: false }, 'opt1'),
    object('option 2', { title: 'Option 2', breakAfter: false, emphasis: false }, 'opt2'),
    object('option 3', { title: 'Option 3', breakAfter: false, emphasis: false }, 'opt3'),
    object('option 4', { title: 'Option 4', breakAfter: false, emphasis: false }, 'opt4'),
    object('option 5', { title: 'Option 5', breakAfter: false, emphasis: false }, 'opt5'),
  ];

  const width = number('width', 800);

  return (
    <Flex direction='column' gap='30px'>
      <Select options={options} width={width} />
    </Flex>
  );
};
