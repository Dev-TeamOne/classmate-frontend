import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import Alert from './Alert';
import Flex from '../Flex';
import { action } from '@storybook/addon-actions';

/**
 * Alert는 피드백에 대한 알림 컴포넌트로, 주로 사용자에게 경고나 알림 메시지를 표시해야 하는 경우 사용됩니다.
 *
 * 총 네 가지 유형(theme)의 Alert를 제공합니다.
 * - `정보(info)`
 * - `성공(success)`
 * - `경고(warning)`
 * - `오류(error)`
 *
 */

export default {
  title: 'Components/Alert',
  component: Alert,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Alert 컴포넌트',
  },
  argTypes: {
    theme: {
      type: { name: 'select', required: false },
      defaultValue: 'info',
      description: '',
      control: {
        type: 'select',
        options: ['info', 'warning', 'error', 'success'],
      },
      table: {
        type: { summary: ['info', 'warning', 'error', 'success'] },
        defaultValue: { summary: 'info' },
      },
    },
  },
};

export const Basics = () => {
  const props = {
    onClickClose: action('close-click'),
  };

  return (
    <Flex direction='column'>
      <Alert {...props}>동해물과 백두산이 마르고 닳도록</Alert>
      <Alert theme={'warning'} {...props}>
        동해물과 백두산이 마르고 닳도록
      </Alert>
      <Alert theme={'success'} hasCloseButton {...props}>
        동해물과 백두산이 마르고 닳도록
      </Alert>
      <Alert theme={'error'} hasCloseButton {...props}>
        동해물과 백두산이 마르고 닳도록 동해물과 백두산이 마르고 닳도록 동해물과 백두산이 마르고
      </Alert>
    </Flex>
  );
};

export const WithKnobs = () => {
  const label = text('label', '입력하세요');
  const props = {
    theme: select('theme', ['info', 'warning', 'error', 'success'], 'info'),
    onClickClose: action('close-click'),
    hasCloseButton: boolean('hasCloseButton', false),
  };

  return (
    <Flex direction='column'>
      <Alert {...props}>{label}</Alert>
    </Flex>
  );
};
