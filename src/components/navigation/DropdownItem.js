import React, { useEffect, useRef } from 'react';
import {
  DropdownWrapper,
  ColumnOne,
  ColumnTwo,
  ColumnThree,
  ListItem,
  Image,
  ImageWrapper,
  ImagesWrapper,
} from './Navigation.styles';

const splitDataByColumn = (data) => {
  let columnOneItems = data.children_data.filter(
    (item) =>
      !item.include_in_menu_column2 &&
      !item.include_in_menu_column3 &&
      !item.is_column_header
  );
  let columnTwoItems = data.children_data.filter(
    (item) => item.include_in_menu_column2 && !item.is_column_header
  );
  let columnThreeItems = data.children_data.filter(
    (item) => item.include_in_menu_column3 && !item.is_column_header
  );

  if (columnOneItems.length === 0) {
    columnOneItems = false;
  }
  if (columnTwoItems.length === 0) {
    columnTwoItems = false;
  }

  if (columnThreeItems.length === 0) {
    columnThreeItems = false;
  }
  return { columnOneItems, columnTwoItems, columnThreeItems };
};

// This function could split a column into sub-columns. I've noticed some items are spread on 3 columns even if
// their include_in_menu_column2 and include_in_menu_column are both false. For now I'll just render them as one long column but this is what I'd do to spread
// them on multiple columns. There are some vanilla CSS solutions but they don't have good browser compatibility so I think doing it in javascript would be the
// best way.
// const renderSubColumns = (columnItems) => {
//   return columnItems.reduce(
//     (acc, currentItem, index) => {
//       if (index < 10) {
//         acc[0].push(currentItem);
//         return acc;
//       }
//       if (index >= 10 && index <= 20) {
//         acc[1].push(currentItem);
//         return acc;
//       }
//       this would crop out any column that contains more than 30 items
//       if (index > 20 && index <=30) {
//         acc[2].push(currentItem);
//         return acc;
//       }
//     },
//     [[], [], []]
//   );
// };

export const DropdownItem = ({
  dropdownData,
  id,
  currentlyHoveredItem,
  setCurrentlyHoveredDropdown,
  currentlyHoveredDropdown,
}) => {
  const {
    columnOneItems,
    columnTwoItems,
    columnThreeItems,
  } = splitDataByColumn(dropdownData);
  const dropdownRef = useRef(null);
  const imageUrls = [
    dropdownData.dropdown_image_url1,
    dropdownData.dropdown_image_url2,
    dropdownData.dropdown_image_url3,
    dropdownData.dropdown_image_url4,
  ];
  const imagesWrapperWidth =
    imageUrls.filter((url) => url).length > 2 ? 432 : 232;

  useEffect(() => {
    // typescript optional chaining or lodash get would work really well here.
    const currentNode = dropdownRef.current;
    const onMouseOver = () => {
      // setIsDropdownCurrentlyHovered(true);
      setCurrentlyHoveredDropdown(id);
    };
    const onMouseLeave = () => {
      setCurrentlyHoveredDropdown(null);
    };
    if (currentNode) {
      currentNode.addEventListener('mouseover', onMouseOver);
      currentNode.addEventListener('mouseleave', onMouseLeave);
    }
    return () => {
      if (currentNode) {
        currentNode.removeEventListener('mouseover', onMouseOver);
        currentNode.removeEventListener('mouseleave', onMouseLeave);
      }
    };
    // no dependency array because we want this effect to fire every time. We could probably use a deps array but with a callback ref, not a regular ref
    // because regular refs don't change their reference when the .current property changes
  });
  // console.log({ currentlyHoveredItem, currentlyHoveredDropdown });
  return currentlyHoveredItem === id || currentlyHoveredDropdown === id ? (
    // return id === 'Brands' ? (
    <DropdownWrapper ref={dropdownRef}>
      {columnOneItems ? (
        <ColumnOne>
          {columnOneItems.map((item) => (
            <ListItem key={item.name}>{item.name}</ListItem>
          ))}
        </ColumnOne>
      ) : null}
      {columnTwoItems ? (
        <ColumnTwo>
          {columnTwoItems.map((item) => (
            <ListItem key={item.name}>{item.name}</ListItem>
          ))}
        </ColumnTwo>
      ) : null}
      {columnThreeItems ? (
        <ColumnThree>
          {columnThreeItems.map((item) => (
            <ListItem key={item.name}>{item.name}</ListItem>
          ))}
        </ColumnThree>
      ) : null}
      <ImagesWrapper imagesWrapperWidth={imagesWrapperWidth}>
        {imageUrls.map((url) => {
          return url ? (
            <ImageWrapper key={url}>
              <Image src={url} alt={`${dropdownData.category_path}`} />
            </ImageWrapper>
          ) : null;
        })}
      </ImagesWrapper>
    </DropdownWrapper>
  ) : null;
};
