import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import Input from './Input';
import Flex from '../Flex/Flex';
import Icon from '../Icon';

/**
 * Input은 사용자의 입력을 얻기 위한 필드입니다. 데이터를 제공하거나 변경하기 위해 키보드와 마우스 입력이 가능합니다.
 *
 Input은 textfield와 textarea 형태로 모두 사용이 가능하고, 이는 multiline 속성을 이용해 변경 가능합니다.

 TextField의 경우, 인풋 창의 좌측과 우측에 아이콘을 추가하여 이용할 수 있고, Textarea는 인푹 창 우측에만 아이콘을 추가할 수 있습니다.

 ```
  <Input leftAddon={<Icon name='account-circle' color='primary1' />} />
   <Input multiline={true} placeholder={'Type your question'} rightAddon={<Icon name='send' />} />
	```
 */

export default {
  title: 'Components/Input',
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Input 컴포넌트',
  },
};

export const Textfield = () => {
  return (
    <Flex direction='column'>
      <Input />
      <Input leftAddon={<Icon name='account-circle' />} />
      <Input rightAddon={<Icon name='return' />} />
      <Input rightAddon={<Icon name='return' />} disabled />
    </Flex>
  );
};

export const Textarea = () => {
  return (
    <Flex direction='column'>
      <Input multiline={true} defaultValue={'기본 질문입니다.'} />
      <Input
        multiline={true}
        placeholder={'Type your question'}
        rightAddon={<Icon name='send' />}
      />
    </Flex>
  );
};

export const WithKnobs = () => {
  const multiline = boolean('multiline', false);
  const hasLeftAddon = boolean('hasLeftAddon', false);
  const leftAddonIconName = text('left icon name', 'account-circle');
  const hasRightAddon = boolean('hasRightAddon', false);
  const rightAddonIconName = text('right icon name', 'send');

  return (
    <Flex>
      <Input
        multiline={multiline}
        placeholder={text('placeholder', '플레이스 홀더입니다.')}
        disabled={boolean('disabled', false)}
        leftAddon={!multiline && hasLeftAddon ? <Icon name={leftAddonIconName} /> : undefined}
        rightAddon={hasRightAddon ? <Icon name={rightAddonIconName} /> : undefined}
        maxLength={number('maxLength', 160)}
      />
    </Flex>
  );
};
