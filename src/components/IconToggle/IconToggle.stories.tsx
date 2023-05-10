import { withKnobs, text, number, boolean } from '@storybook/addon-knobs';
import IconToggle from './IconToggle';
import Icon from '../Icon';

/**
 *
 * Icon Toggle은 스위칭 셀렉터입니다.
 *
 * 아이콘 토글은 토글과 유사하게 동작합니다. ON 상태에서는 Primary color를 가지고, OFF 상태에서는 Grey color를 가집니다.
 *
 * ON/OFF 각각의 상태에 다른 모양의 아이콘을 사용할 수도 있습니.
 *
 * 사용하려는 아이콘의 이름을 [IconGallery](http://localhost:6006/?path=/docs/getting-started-icons--docs)에서 확인하고, 원하는 색상 선택은 불가합니다.
 *
 * 이때 사이즈의 경우 Icon Toggle에 전달되는 Props로 아이콘 크기 역시 지정됩니다.
 * ```
 *  <IconToggle icon={<Icon name='star-fill' />} size={30} />;
 *  <IconToggle
 *     icon={<Icon name='like' />}
 *     unpressedIcon={<Icon name='like-outline' />}
 *     size={18}
 *  />
 * ```
 */

export default {
  title: 'Components/IconToggle',
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: '아이콘 토글 컴포넌트',
  },
};

export const Basics = () => {
  return <IconToggle icon={<Icon name='star-fill' />} />;
};

export const WithUnpressedIcon = () => {
  return (
    <IconToggle
      icon={<Icon name='like' />}
      unpressedIcon={<Icon name='like-outline' />}
      size={18}
    />
  );
};

export const WithKnobs = () => {
  return (
    <IconToggle
      size={number('size', 24)}
      defaultPressed={boolean('defaultPressed', false)}
      icon={<Icon name={text('icon', 'star-fill')} />}
      unpressedIcon={<Icon name={text('unpressedIcon', 'star-outline')} />}
      disabled={boolean('disabled', false)}
    />
  );
};
