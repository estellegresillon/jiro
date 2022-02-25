import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { useBoardContext } from "contexts";
import { useOnClickOutside } from "hooks/useOnClickOutside";

import SmallModal from "../SmallModal";

const Menu = () => {
  const { createElement } = useBoardContext();

  const createTicketRef = useRef();
  const createColumnRef = useRef();

  const [isCreateTicketOpen, setCreateTicketOpen] = useState(false);
  const [isCreateColumnOpen, setCreateColumnOpen] = useState(false);

  useOnClickOutside(createTicketRef, () => setCreateTicketOpen(false));
  useOnClickOutside(createColumnRef, () => setCreateColumnOpen(false));

  return (
    <MenuWrapper>
      <Item>
        <Link to="/">Jiro</Link>
      </Item>
      <Item>+ New Sprint</Item>
      <Item onClick={() => setCreateTicketOpen(true)}>
        <div>+ Ticket</div>
        {isCreateTicketOpen && (
          <SmallModal
            modalRef={createTicketRef}
            name="ticket"
            onValidate={createElement}
            onClose={() => setCreateTicketOpen(false)}
          />
        )}
      </Item>
      <Item onClick={() => setCreateColumnOpen(true)}>
        <div>+ Column</div>
        {isCreateColumnOpen && (
          <SmallModal
            modalRef={createColumnRef}
            name="column"
            onValidate={createElement}
            onClose={() => setCreateColumnOpen(false)}
          />
        )}
      </Item>
    </MenuWrapper>
  );
};

export default Menu;

const MenuWrapper = styled.div`
  align-items: center;
  background-color: white;
  box-shadow: 0 1px 80px 0 rgb(0 0 0 / 10%);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 200px;

  a {
    color: black;
    text-decoration: none;
  }
`;

const Item = styled.div`
  align-items: center;
  border-radius: 10px;
  color: black;
  cursor: pointer;
  display: flex;
  height: 70px;
  justify-content: center;
  margin: 10px;
  position: relative;
  text-align: center;
  width: calc(100% - 20px);

  &:hover {
    background-color: #f7f7f7;
  }
`;
