import { withKnobs } from '@storybook/addon-knobs';
import DatePicker from './DatePicker';
import Flex from '../Flex';

/**
 * DatePicker는 날짜를 선택하는 입력 창입니다.
 * 입력 창을 클릭하면 팝업 달력이 보이며 원하는 날짜를 선택할 수 있습니다.
 */

export default {
  title: 'Components/DatePicker',
  component: DatePicker,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'DatePicker 컴포넌트',
  },
};

export const Basics = () => {
  return (
    <Flex>
      <DatePicker />
    </Flex>
  );
};
