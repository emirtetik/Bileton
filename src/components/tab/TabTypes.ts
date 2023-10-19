import { ReactNode,  FC } from "react";

export interface TabProps {
  children: ReactNode;
  activeTab:string
  
}

export interface TabType extends FC<TabProps> {
  Items: FC<ItemsProps>;
  Item: FC<ItemProps>;
  Content: FC<ContentProps>;
}

export interface ItemsProps {
  children: ReactNode;
}

export interface ItemProps {
  children: ReactNode | string;
  id: string;
}

export interface ContentProps {
  children: ReactNode;
  id: string;
}


export type TabContextTypes = {
  active:string
  setActive:(value: string) => void;
}
