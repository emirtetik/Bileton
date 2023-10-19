import React, { ReactElement } from "react";
import { TabType } from "./TabTypes";
import Content from "./content";
import Item from "./item";
import Items from "./items";
import { TabContext } from "./context";
import Sticky from "../sticky";

const Tab: TabType = ({ children, activeTab }) => {
  const [active, setActive] = React.useState(activeTab);
   console.log(children)
  React.useEffect(() => {
    setActive(activeTab);
  }, [activeTab]);

  const contents = React.Children.toArray(children).filter(
    (child) => React.isValidElement(child) && (child as ReactElement).type === Content
  );
  const content = contents.find(
    child => React.isValidElement(child) && child.props.id === active
  );

  const Stickys = React.Children.toArray(children).filter(
    (child) => React.isValidElement(child) && (child as ReactElement).type === Sticky
  );
  const items = Stickys[0];

  const activeData = {
    active,
    setActive,
  };
  return (
    <TabContext.Provider value={activeData}>
      {items}
      {content}
    </TabContext.Provider>
  );
};

Tab.Items = Items;
Tab.Item = Item;
Tab.Content = Content;

export default Tab;
