import { CSSProperties, HTMLProps } from 'react';

interface Props extends HTMLProps<HTMLDivElement> {
  direction?: CSSProperties['flexDirection'];
  align?: CSSProperties['alignItems'];
  justify?: CSSProperties['justifyContent'];
  gap?: CSSProperties['gap'];
}

/**
 * stories 파일에서 사용되는 내부 컴포넌트
 */

function Flex({
  direction = 'row',
  align = 'flex-start',
  justify = 'flex-start',
  gap = '10px',
  style,
  ...rest
}: Props) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: align,
        justifyContent: justify,
        flexDirection: direction,
        gap: gap,
        ...style,
      }}
      {...rest}
    />
  );
}

export default Flex;
