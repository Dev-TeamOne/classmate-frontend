import { HTMLAttributes } from 'react';
import { Channel } from './types';
import ChannelItem from './ChannelItem';

export interface Props extends HTMLAttributes<HTMLUListElement> {
  list: Array<Channel>;
  type?: 'created' | 'participated';
}

function ChannelList({ list, type, ...rest }: Props) {
  return (
    <ul {...rest}>
      {list.map((item: Channel, index: number) => (
        <ChannelItem key={index} item={item} type={type} />
      ))}
    </ul>
  );
}

export default ChannelList;
