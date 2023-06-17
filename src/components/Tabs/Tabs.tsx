import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { ResetButton } from '../../styles/common';
import useTabs from '../../hooks/useTabs';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  position?: TabPosition;
  items: Array<TabItem>;
  defaultActiveKey?: TabItem['key'];
  gap?: number;
}

function Tabs({ items, position = 'center', defaultActiveKey, gap = 30, ...rest }: Props) {
  const { activeTabKey, setActiveTab } = useTabs({ items, defaultActiveKey });

  return (
    <TabWrapper gap={gap} {...rest}>
      <TabList position={position}>
        {items.map((item: TabItem) => (
          <TabItem key={item.key}>
            <TabItemButton
              isActive={activeTabKey === item.key}
              onClick={() => setActiveTab(item.key)}
            >
              {item.label}
            </TabItemButton>
          </TabItem>
        ))}
      </TabList>
      <div>
        {items.map((item: TabItem) => (
          <TabContentPanel key={item.key} isActive={activeTabKey === item.key}>
            {item.children}
          </TabContentPanel>
        ))}
      </div>
    </TabWrapper>
  );
}

export default Tabs;

interface TabWrapperProps extends Pick<Props, 'gap'> {}

interface TabListProps extends Pick<Props, 'position'> {}

interface TabItemProps {
  isActive: boolean;
}

const TabWrapper = styled.div<TabWrapperProps>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => `${props.gap}px`};
`;

const TabList = styled.div<TabListProps>`
  width: 100%;
  display: flex;
  gap: 60px;
  justify-content: ${({ position }) =>
    position === 'left' ? 'flex-start' : position === 'right' ? 'flex-end' : 'center'};
`;

const TabItem = styled.div`
  min-width: 60px;
`;

const TabItemButton = styled(ResetButton)<TabItemProps>`
  width: 100%;
  padding: 12px 5px;
  color: ${({ theme, isActive }) => (isActive ? theme.colors.primary1 : theme.colors.grey1)};
  font-size: ${({ theme }) => theme.typo.small};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  border-bottom: ${({ theme, isActive }) =>
    isActive ? `2px solid ${theme.colors.primary1}` : 'none'};
  display: flex;
  justify-content: center;

  :hover,
  :focus {
    color: ${({ theme }) => theme.colors.primary1};
  }
`;

const TabContentPanel = styled.div<TabItemProps>`
  display: ${({ isActive }) => (isActive ? 'block' : 'none')};
`;
