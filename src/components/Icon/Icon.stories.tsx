import { withKnobs, text, number, color } from '@storybook/addon-knobs';
import Icon from './Icon';

/**
 * 아이콘은 프로젝트에서 사용되는 그림을 svg 파일 형태로 저장해놓고 불러와 사용합니다.
 *
 * 사용하려는 아이콘의 이름을 [IconGallery](http://localhost:6006/?path=/docs/getting-started-icons--docs)에서 확인하고, 원하는 색상과 사이즈 속성을 추가하여 이용 가능합니다.
 *
 * 이때, 사이즈의 경우 number 타입으로 입력하며, 입력된 값으로 width가 설정되고, height는 svg 사이즈에 맞춰 자동으로 조절됩니다.
 *
 * ```
 *
 *  <Icon name={'menu'} size={30} color={'primary1'} />
 * <Icon name={'menu'} size={30} color={'#123455'} />
  ```
 `
 */

export default {
  title: 'Components/Icon',
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: '아이콘 컴포넌트',
  },
};

export const WithKnobs = () => {
  const props = {
    name: text('name', 'account-circle'),
    size: number('size', 24),
    color: color('color', '#000'),
  };

  return <Icon {...props} />;
};
