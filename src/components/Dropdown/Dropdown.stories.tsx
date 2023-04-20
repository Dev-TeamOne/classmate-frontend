import { withKnobs, object } from '@storybook/addon-knobs';
import Dropdown from './Dropdown';
import Flex from '../Flex';
import Icon from '../Icon';
import Button from '../Button';
import { action } from '@storybook/addon-actions';

/**
 * Dropdown은 메뉴 리스트의 역할을 합니다.
 * 트리거를 클릭하면 드롭다운 메뉴가 나타나고, 메뉴아이템 클릭을 통해 옵션 선택이 가능합니다.
 *
 * Dropdown 아이템은 구분선을 통해 그룹핑이 가능하고, 강조되는 문구는 빨간색으로 나타냅니다.
 */

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: '드롭다운 리스트 컴포넌트',
  },
};

export const Basics = () => {
  return (
    <Flex direction='column' gap='30px'>
      <Dropdown
        onClickOption={action('onClickOption')}
        options={[
          { title: '발표 모드' },
          { title: '참가자 모드', breakAfter: true },
          { title: '링크 복사하기' },
          { title: '삭제하기', emphasis: true },
        ]}
      >
        <Icon name='more-vertical' />
      </Dropdown>
      <Dropdown
        onClickOption={action('onClickOption')}
        options={[
          { title: '1st menu item' },
          { title: '2nd menu item', breakAfter: true },
          { title: '3rd menu item' },
          { title: '4th menu item' },
        ]}
      >
        <Button size={'small'} variant={'text'} underline={false}>
          Click me
        </Button>
      </Dropdown>
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

  return (
    <Flex direction='column' gap='30px'>
      <Dropdown onClickOption={action('onClickOption')} options={options}>
        <Button size={'small'} underline={false}>
          Custom
        </Button>
      </Dropdown>
    </Flex>
  );
};
