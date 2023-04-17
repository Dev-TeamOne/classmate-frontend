import { withKnobs, text, number, color } from '@storybook/addon-knobs';
import IconButton from './IconButton';
import { action } from '@storybook/addon-actions';

/**
 * 아이콘 버튼은 버튼과 동일하게 동작합니다. 버튼을 클릭하면 해당 비즈니스 로직이 트리거됩니다.
 *
 * 버튼 컴포넌트를 이용하지 않고 아이콘으로 버튼의 역할을 주는 경우에 사용됩니다.
 *
 * 사용하려는 아이콘의 이름을 [IconGallery](http://localhost:6006/?path=/docs/getting-started-icons--docs)에서 확인하고, 원하는 색상과 사이즈 속성을 추가하여 이용 가능합니다.
 *
 * 이때, 사이즈의 경우 number 타입으로 입력하며, 입력된 값으로 width가 설정되고, height는 svg 사이즈에 맞춰 자동으로 조절됩니다.
 * ```
 *  <IconButton name={'menu'} size={30} color={'primary1'} onClick={ONCLICK_METHOD} />
 * <IconButton name={'menu'} size={30} color={'#123455'} onClick={ONCLICK_METHOD} />
 * ```
 */

export default {
  title: 'Components/IconButton',
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: '아이콘버튼 컴포넌트',
  },
};

export const Basics = () => {
  const onClick = action('onClick');
  return <IconButton name={'menu'} size={30} color={'primary1'} onClick={onClick} />;
};

export const WithKnobs = () => {
  const props = {
    name: text('name', 'round-plus'),
    size: number('size', 24),
    color: color('color', '#000'),
    onClick: action('onClick'),
  };

  return <IconButton {...props} />;
};
