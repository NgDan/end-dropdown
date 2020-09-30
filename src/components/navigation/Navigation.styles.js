import styled from 'styled-components';
import { rem } from 'polished';
export const NavWrapper = styled.div`
  margin: 0 auto;
  position: relative;
  margin: 0 auto;
  max-width: ${rem(1000)};
`;
export const NavList = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  padding: 0;

  justify-content: space-around;
`;
export const NavItem = styled.li`
  flex-grow: 1;
  text-align: center;
  cursor: pointer;
`;
export const DropdownWrapper = styled.div`
  position: absolute;
  width: calc(100% - ${rem(64)});
  left: 50%;
  transform: translateX(-50%);
  top: 100%;
  align-items: flex-start;
  padding-top: ${rem(32)};
  display: flex;
  justify-content: space-between;
`;
export const ColumnOne = styled.div`
  display: flex;
  flex-flow: column;
  flex-wrap: wrap;
`;
export const ColumnTwo = styled.div`
  display: flex;
  flex-flow: column;
  flex-wrap: wrap;
`;
export const ColumnThree = styled.div`
  display: flex;
  flex-flow: column;
  flex-wrap: wrap;
`;
export const ListItem = styled.li`
  cursor: pointer;
`;
export const ImagesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: ${({ imagesWrapperWidth }) => rem(imagesWrapperWidth)};
`;
export const ImageWrapper = styled.div`
  width: ${rem(200)};
  margin-left: ${rem(16)};
  margin-top: ${rem(16)};
`;
export const Image = styled.img`
  width: 100%;
`;
