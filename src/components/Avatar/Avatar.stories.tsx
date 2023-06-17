import { withKnobs } from '@storybook/addon-knobs';
import Avatar from './Avatar';
import Flex from '../Flex';

/**
 * Avatar는 사람이나 사물의 프로필을 나타내는 데 사용할 수 있습니다.
 *
 * 사용자의 사진이나 사용자 모양 아이콘, 혹은 이름의 알파벳을 지원합니다.
 * 문자를 가지는 아바타의 경우, 기본적으로 배경색은 랜덤 색으로 지정되고 사용자 지정 배경색을 가질 수 있습니다.
 * 현재 활동 중 여부를 표시하는 배지가 아바타 우측 하단에 표시될 수 있습니다.
 *
 * Avatar.Group을 활용하면 여러 사용자 아바타를 스택으로 렌더링합니다. max를 사용해 아바타 수를 제한할 수 있습니다.
 */

export default {
  title: 'Components/Avatar',
  component: Avatar,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: '아바타 컴포넌트',
  },
};

export const Basics = () => {
  return (
    <Flex gap={30} direction='column'>
      <Flex gap={10}>
        <Avatar />
        <Avatar isLogin isActive />
      </Flex>
      <Flex gap={10}>
        <Avatar size={50} />
        <Avatar isLogin size={50} isActive />
      </Flex>
      <Flex gap={10}>
        <Avatar size={100} />
        <Avatar isLogin size={100} isActive />
      </Flex>
    </Flex>
  );
};

export const WithImg = () => {
  return (
    <Flex gap={10}>
      <Avatar
        src='https://img.freepik.com/free-photo/portrait-of-white-man-isolated_53876-40306.jpg'
        size={50}
      />
      <Avatar
        src='https://img.freepik.com/free-photo/smiling-asian-young-woman-face-portrait_53876-145636.jpg?w=996&t=st=1683905680~exp=1683906280~hmac=ff31df5bf2a3528cb567379c1e0f03d1815d5813ba4fa9f18b593cfad6189dc0'
        size={50}
      />
      <Avatar
        src='https://img.freepik.com/free-photo/happy-asian-young-woman-face-portrait_53876-143108.jpg?w=996&t=st=1683905690~exp=1683906290~hmac=207a734615356e36e52b76e3a6e6d38e6eafff21a0d0ef97a45983621b3211f7'
        size={50}
      />
    </Flex>
  );
};

export const WithText = () => {
  return (
    <Flex gap={10}>
      <Avatar firstName='Hyewon' lastName='Kang' />
      <Avatar firstName='Yunho' lastName='Choi' />
      <Avatar firstName='Minseong' lastName='Kang' />
      <Avatar firstName='Sieun' lastName='Lee' />
      <Avatar firstName='Hyewon' />
      <Avatar lastName='Kang' />
    </Flex>
  );
};

export const WithBadge = () => {
  return (
    <Flex gap={10}>
      <Avatar
        src='https://img.freepik.com/free-photo/portrait-of-white-man-isolated_53876-40306.jpg'
        isActive
        size={40}
      />
      <Avatar
        src='https://img.freepik.com/free-photo/smiling-asian-young-woman-face-portrait_53876-145636.jpg?w=996&t=st=1683905680~exp=1683906280~hmac=ff31df5bf2a3528cb567379c1e0f03d1815d5813ba4fa9f18b593cfad6189dc0'
        isActive={false}
        size={40}
      />
    </Flex>
  );
};

export const WithAvatarGroup = () => {
  return (
    <Flex gap={10} direction='column'>
      <Avatar.Group total={24} max={8}>
        <Avatar firstName='A' lastName='Kang' />
        <Avatar firstName='B' />
        <Avatar firstName='C' />
        <Avatar firstName='D' />
        <Avatar firstName='E' />
        <Avatar firstName='F' />
        <Avatar firstName='G' />
        <Avatar firstName='H' />
        <Avatar firstName='I' />
      </Avatar.Group>
      <Avatar.Group>
        <Avatar firstName='A' lastName='Kang' />
        <Avatar firstName='B' />
        <Avatar firstName='C' />
        <Avatar firstName='D' />
        <Avatar firstName='E' />
        <Avatar firstName='F' />
        <Avatar firstName='G' />
        <Avatar firstName='H' />
        <Avatar firstName='I' />
      </Avatar.Group>
    </Flex>
  );
};
