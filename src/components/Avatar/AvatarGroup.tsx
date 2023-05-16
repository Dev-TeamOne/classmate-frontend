import {
  Children,
  ComponentProps,
  HTMLAttributes,
  ReactElement,
  cloneElement,
  isValidElement,
} from 'react';
import styled from 'styled-components';
import Avatar from './Avatar';

type AvatarGroupChild = ReactElement<ComponentProps<typeof Avatar>> | null;

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /**
   * max: limit the number of avatars
   */
  max?: number;
  total?: number;
  children: AvatarGroupChild | AvatarGroupChild[];
  size?: number;
}

function AvatarGroup({ max = 5, total, size, children, ...rest }: Props) {
  const validChildren = Children.toArray(children).filter(isValidElement) as Array<
    NonNullable<AvatarGroupChild>
  >;

  const AvatarGroupItems = validChildren.map((child) => {
    return cloneElement(child, { style: { border: '1px solid white' }, size: size });
  });

  return (
    <AvatarGroupContainer {...rest}>
      {AvatarGroupItems.slice(0, max - 1)}
      {total || max ? (
        <Avatar color='#bdbdbd' style={{ border: '1px solid white', fontSize: '14px' }} size={size}>
          +{total ? total - max : AvatarGroupItems.length - max + 1}
        </Avatar>
      ) : null}
    </AvatarGroupContainer>
  );
}

export default AvatarGroup;

const AvatarGroupContainer = styled.div`
  display: inline-flex;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  .avatar-circle:not(:first-child) {
    margin-left: -5px;
  }
`;
