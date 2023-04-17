import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import Button from './Button';
import Flex from '../Flex';
import { action } from '@storybook/addon-actions';

/**
 * 버튼은 동작(또는 일련의 동작)을 의미합니다. 버튼을 클릭하면 해당 비즈니스 로직이 트리거됩니다.
 *
 * 총 세 가지 유형의 버튼을 제공합니다.
 * - `contained button` : 주요 작업을 표시합니다. 하나의 섹션에서 최대 하나를 가집니다.
 * - `text button` : 일반적인 작업에 주로 사용됩니다.
 * - `outlined button` : 클릭 시 다른 페이지로 옮겨지는 등 보조적인 동작에 사용됩니다.
 */

export default {
  title: 'Components/Button',
  component: Button,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: '버튼 컴포넌트',
  },
};

export const Basics = () => {
  const label = text('label', 'Button');

  return (
    <Flex direction='column'>
      contained 버튼
      <Flex align='center'>
        <Button onClick={action('onClick')} size={'large'}>
          {label}
        </Button>
        <Button onClick={action('onClick')} size={'medium'}>
          {label}
        </Button>
        <Button onClick={action('onClick')} size={'small'}>
          {label}
        </Button>
        <Button onClick={action('onClick')} size={'small'} disabled>
          {label}
        </Button>
      </Flex>
      outlined 버튼
      <Flex align='center'>
        <Button onClick={action('onClick')} size={'large'} variant={'outlined'}>
          {label}
        </Button>
        <Button onClick={action('onClick')} size={'medium'} variant={'outlined'}>
          {label}
        </Button>
        <Button onClick={action('onClick')} size={'small'} variant={'outlined'}>
          {label}
        </Button>
        <Button onClick={action('onClick')} size={'small'} disabled variant={'outlined'}>
          {label}
        </Button>
      </Flex>
      text 버튼
      <Flex align='center'>
        <Button onClick={action('onClick')} size={'large'} variant={'text'}>
          {label}
        </Button>
        <Button onClick={action('onClick')} size={'medium'} variant={'text'}>
          {label}
        </Button>
        <Button onClick={action('onClick')} size={'small'} variant={'text'}>
          {label}
        </Button>
        <Button onClick={action('onClick')} size={'small'} disabled variant={'text'}>
          {label}
        </Button>
      </Flex>
      text 버튼 (underline x)
      <Flex align='center'>
        <Button onClick={action('onClick')} size={'large'} variant={'text'} underline={false}>
          {label}
        </Button>
        <Button onClick={action('onClick')} size={'medium'} variant={'text'} underline={false}>
          {label}
        </Button>
        <Button onClick={action('onClick')} size={'small'} variant={'text'} underline={false}>
          {label}
        </Button>
        <Button
          onClick={action('onClick')}
          size={'small'}
          disabled
          variant={'text'}
          underline={false}
        >
          {label}
        </Button>
      </Flex>
    </Flex>
  );
};

export const WithKnobs = () => {
  const label = text('label', 'Button');
  const props = {
    disabled: boolean('disabled', false),
    size: select('size', ['large', 'medium', 'small'], 'medium'),
    underline: boolean('underline', true),
    variant: select('variant', ['contained', 'outlined', 'text'], 'contained'),
  };

  return (
    <Flex direction='column'>
      <Flex>
        <Button onClick={action('onClick')} {...props}>
          {label}
        </Button>
      </Flex>
    </Flex>
  );
};
