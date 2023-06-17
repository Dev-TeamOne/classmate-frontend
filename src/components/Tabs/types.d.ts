type TabPosition = 'left' | 'center' | 'right';

interface TabItem {
  key: string;
  label: string;
  children: ReactElement;
}
