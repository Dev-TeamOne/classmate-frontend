import { withKnobs } from '@storybook/addon-knobs';
import Fab from './Fab';
import Flex from '../Flex';

/**
 * FAB(Floating Action Button)는 화면에서 기본 또는 가장 일반적인 작업을 수행합니다.
 * FAB는 일반 및 확장의 두 가지 유형으로 제공됩니다. 확장 타입의 경우, 여러 버튼을 함께 사용할 때 이용되며 'click'이나 'hover' 이벤트 트리거로 버튼을 확장할 수 있습니다.
 *
 * 대표적인 예로 BackTop 버튼은 해당 페이지 내 최상단으로 쉽게 돌아갈 수 있는 기능을 제공합니다.
 */

export default {
  title: 'Components/FAB',
  component: Fab,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'FAB(Floating Button Action) 컴포넌트',
  },
};

export const Basics = () => {
  return (
    // NOTE: 스토리북 상에서는 position='none'으로 하단 고정 안되게 함
    <Flex gap={30} style={{ position: 'relative' }}>
      <Fab type='default' position='none' />
      <Fab type='primary' position='none' />
    </Flex>
  );
};

export const WithTooltip = () => {
  return (
    <Flex style={{ height: '80px', padding: '20px', position: 'relative' }}>
      <Fab color='white' iconName={'menu'} tooltip='Menu' position='none' />
    </Flex>
  );
};

export const ButtonGroups = () => {
  return (
    <Fab.Group trigger='none' type='primary' position='none'>
      <Fab iconName='intro-poll' tooltip='Go to polls' />
      <Fab iconName='clipboard' tooltip='Copy channel link' />
      <Fab iconName='fullscreen' tooltip='Fullscreen' />
      <Fab iconName='disabled' tooltip='Disable participant Q&A' />
      <Fab iconName='door-back' tooltip='Back to main' />
    </Fab.Group>
  );
};

export const WithButtons = () => {
  return (
    <Fab.Group trigger='click' type='primary' position='none'>
      <Fab iconName='intro-poll' tooltip='Go to polls' />
      <Fab iconName='clipboard' tooltip='Copy channel link' />
      <Fab iconName='fullscreen' tooltip='Fullscreen' />
      <Fab iconName='disabled' tooltip='Disable participant Q&A' />
      <Fab iconName='door-back' tooltip='Back to main' />
    </Fab.Group>
  );
};
