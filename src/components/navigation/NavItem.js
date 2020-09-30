import React, { useEffect, useRef } from 'react';
import { NavItem } from './Navigation.styles';
import { DropdownItem } from './DropdownItem';

export const Item = ({
  itemData,
  id,
  currentlyHoveredItem,
  setCurrentlyHoveredItem,
  setCurrentlyHoveredDropdown,
  currentlyHoveredDropdown,
}) => {
  const listItemRef = useRef(null);
  useEffect(() => {
    const currentNode = listItemRef.current;
    const onMouseOver = () => {
      setCurrentlyHoveredItem(id);
      setCurrentlyHoveredDropdown(id);
    };
    const onMouseLeave = () => {
      setCurrentlyHoveredItem(null);
    };
    currentNode.addEventListener('mouseover', onMouseOver);
    currentNode.addEventListener('mouseleave', onMouseLeave);
    return () => {
      if (currentNode) {
        currentNode.removeEventListener('mouseover', onMouseOver);
        currentNode.removeEventListener('mouseleave', onMouseLeave);
      }
    };
  }, [
    currentlyHoveredItem,
    id,
    setCurrentlyHoveredDropdown,
    setCurrentlyHoveredItem,
  ]);
  return (
    <>
      <NavItem ref={listItemRef}>{itemData.category_path}</NavItem>
      <DropdownItem
        dropdownData={itemData}
        id={itemData.category_path}
        currentlyHoveredItem={currentlyHoveredItem}
        setCurrentlyHoveredDropdown={setCurrentlyHoveredDropdown}
        currentlyHoveredDropdown={currentlyHoveredDropdown}
      />
    </>
  );
};
