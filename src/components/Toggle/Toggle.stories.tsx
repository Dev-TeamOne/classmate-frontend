import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import Toggle from './Toggle';
import Flex from '../Flex';
import { action } from '@storybook/addon-actions';

/**
 * Toggle는 스위칭 셀렉터입니다.
 *
 * 두 상태 혹은 ON/OFF 간의 전환을 표현할 때 유용합니다.
 * 비활성화 상태는 grey 컬러로 표현되며, 활성화된 경우는 primary 컬러가 고정입니다.
 */

export default {
  title: 'Components/Toggle',
  component: Toggle,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: '토글(스위치) 컴포넌트',
  },
};

export const Basics = () => {
  return (
    <Flex direction='column' gap={30}>
      <Flex gap={30}>
        <Toggle onChange={action('onChangeToggle')} />
        <Toggle onChange={action('onChangeToggle')} defaultChecked={true} />
        <Toggle onChange={action('onChangeToggle')} disabled />
        <Toggle onChange={action('onChangeToggle')} defaultChecked={true} disabled />
      </Flex>
      <Flex gap={30}>
        <Toggle onChange={action('onChangeToggle')} size={'medium'} defaultChecked={true} />
        <Toggle onChange={action('onChangeToggle')} size={'medium'} />
        <Toggle onChange={action('onChangeToggle')} size={'medium'} disabled />
        <Toggle
          onChange={action('onChangeToggle')}
          size={'medium'}
          defaultChecked={true}
          disabled
        />
      </Flex>
    </Flex>
  );
};

export const WithKnobs = () => {
  const props = {
    size: select('size', ['medium', 'small'], 'small'),
    disabled: boolean('disabled', false),
    defaultChecked: boolean('defaultChecked', false),
  };

  return (
    <Flex direction='row'>
      <Toggle onChange={action('onChangeToggle')} {...props} />
    </Flex>
  );
};
