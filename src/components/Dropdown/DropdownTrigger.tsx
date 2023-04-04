import { HTMLAttributes, Children, cloneElement, Fragment, ReactElement } from 'react';
import styled from 'styled-components';

export interface Props extends Omit<HTMLAttributes<HTMLUListElement>, 'children'> {
  onClickTrigger: () => void;
  children: ReactElement;
}

function DropdownTrigger({ onClickTrigger, children, ...rest }: Props) {
  const trigger = children != null ? Children.only(children) : null;

  return (
    <>
      {trigger != null
        ? cloneElement(trigger, {
            ...trigger.props,
            ...rest,
            onClick: onClickTrigger,
          })
        : null}
    </>
  );
}

export default DropdownTrigger;
