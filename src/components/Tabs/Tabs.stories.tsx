import { withKnobs } from '@storybook/addon-knobs';
import Tabs from './Tabs';

/**
 * Tabs은 같은 페이지 내에서 서로 다른 보기 사이를 쉽게 전환할 수 있습니다.
 *
 * 탭의 위치를 좌측, 왼측, 중앙으로 배치시킬 수 있고, 탭의 타이틀 및 본문 내용을 각 탭마다 설정합니다.
 * 또한, 탭과 본문 사이 간격을 사용자 임의로 조절할 수 있습니다.
 */

export default {
  title: 'Components/Tabs',
  component: Tabs,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: '탭 컴포넌트',
  },
};

export const Basics = () => {
  return (
    <Tabs
      items={[
        {
          key: '1',
          label: `Tab 1`,
          children: `Content of Tab Panel 1`,
        },
        {
          key: '2',
          label: `Tab 2`,
          children: `Content of Tab Panel 2`,
        },
        {
          key: '3',
          label: `Tab 3`,
          children: `Content of Tab Panel 3`,
        },
      ]}
    />
  );
};
