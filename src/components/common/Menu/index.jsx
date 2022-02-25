import styled from "styled-components";

import { useBoardContext } from "contexts";

const Menu = ({ menuRef, onClose }) => {
  const { createElement } = useBoardContext();

  const onClick = () => {
    createElement("ticket");
  };

  return (
    <MenuWrapper ref={menuRef}>
      <Item onClick={onClose}>close</Item>
      <Item>Ticket</Item>
      <Item onClick={onClick}>Create</Item>
    </MenuWrapper>
  );
};

export default Menu;

const MenuWrapper = styled.div`
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 1px 66.5px 0 rgb(0 0 0 / 18%);
  display: flex;
  flex-direction: column;
  max-height: 500px;
  position: absolute;
  overflow: scroll;
  top: 40px;
  width: 250px;
  z-index: 1;
`;

const Item = styled.div`
  color: black;
  margin: 5px;
  padding: 30px;
  text-align: center;

  &:hover {
    background-color: #e9e9e9;
  }
`;
