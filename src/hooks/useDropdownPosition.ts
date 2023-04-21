import { RefObject, useEffect, useState, useCallback } from 'react';
import useOnClickOutside from './useOnClickOutside';

export interface Coordinate {
  x: number;
  y: number;
}

function useDropdownPosition<T extends HTMLElement = HTMLElement>(
  outerRef: RefObject<T>,
  ref: RefObject<HTMLUListElement>,
) {
  const [coords, setCoords] = useState<Coordinate>({ x: 0, y: 0 });
  const [visible, setVisible] = useState<boolean>(false);

  const onFocusOutDropdown = () => setVisible(false);

  useOnClickOutside(ref, onFocusOutDropdown);

  const handleClick = useCallback((event: MouseEvent) => {
    event.preventDefault();

    if (!outerRef?.current || !outerRef.current.contains(event.target as HTMLElement)) {
      setVisible(false);
      return;
    }

    const el = ref?.current;
    const elHeight = el?.clientHeight;
    const elWidth = el?.clientWidth;

    if (!elWidth || !elHeight) return;

    let diffX = 0;
    let diffY = 0;

    // 윈도우 사이즈를 벗어나는 위치의 경우 좌표 수정
    if (window.innerWidth - event.pageX < elWidth) diffX = -elWidth;
    if (window.innerHeight - event.pageY < elHeight) diffY = -elHeight - 30;

    setCoords({ x: diffX + 10, y: diffY });

    return;
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return { coords, visible, setVisible };
}

export default useDropdownPosition;
