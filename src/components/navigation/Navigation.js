import React, { useState } from 'react';
import { navCategories } from '../../data/testData';
import { NavList, NavWrapper } from './Navigation.styles';
import { Item } from './NavItem';
export const Navigation = () => {
  const [currentlyHoveredItem, setCurrentlyHoveredItem] = useState(null);
  const [currentlyHoveredDropdown, setCurrentlyHoveredDropdown] = useState(
    null
  );

  return (
    <NavWrapper>
      <NavList>
        {navCategories.map((item, i) => {
          return (
            <Item
              itemData={item}
              key={item.category_path}
              id={item.category_path}
              currentlyHoveredItem={currentlyHoveredItem}
              setCurrentlyHoveredItem={setCurrentlyHoveredItem}
              currentlyHoveredDropdown={currentlyHoveredDropdown}
              setCurrentlyHoveredDropdown={setCurrentlyHoveredDropdown}
            />
          );
        })}
      </NavList>
    </NavWrapper>
  );
};
