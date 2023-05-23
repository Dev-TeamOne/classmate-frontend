import { withKnobs } from '@storybook/addon-knobs';
import Steps from './Steps';

/**
 * Steps은 옵션들 가운데 값을 선택하는 컴포넌트입니다.
 *
 * 드롭다운 컴포넌트를 이용해 선택지를 보여주며, 인풋 창에서 검색은 불가합니다.
 * 드롭다운 컴포넌트와 같은 방식으로 옵션들을 정의할 수 있어
 * 구분선을 통해 그룹핑이 가능하고, 강조되는 문구는 빨간색으로 나타냅니다.
 */

export default {
  title: 'Components/Steps',
  component: Steps,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: '셀렉트 컴포넌트',
  },
};

export const Basics = () => {
  const items = [
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
    <div>
      <Steps current={1} items={items} />
      <Steps current={2} items={items} />
      <Steps current={3} items={items} />
    </div>
  );
};
