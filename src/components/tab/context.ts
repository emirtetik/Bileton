import {createContext, useContext} from 'react'
import { TabContextTypes } from './TabTypes';

export const TabContext = createContext<TabContextTypes | null>(null);
export const useTab = (): TabContextTypes | null => {
    return useContext(TabContext);
  }
  