import { withKnobs } from '@storybook/addon-knobs';
import Steps from './Steps';

/**
 * Steps는 작업의 단계를 통해 사용자에게 안내하는 탐색 모음입니다.
 *
 * 주어진 작업이 복잡하거나 일련의 하위 작업에서 정해진 순서가 있는 경우 작업을 더 쉽게 만들기 위해 여러 단계로 분해할 수 있습니다.
 * 가로와 세로 두 가지 형태로 이용 가능합니다.
 */

export default {
  title: 'Components/Steps',
  component: Steps,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Steps 컴포넌트',
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
