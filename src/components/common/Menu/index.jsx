import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import IconPlus from "components/common/IconPlus";
import ProjectsModal from "components/common/ProjectsModal";
import SmallModal from "components/common/SmallModal";
import { useBoardContext } from "contexts";

const Menu = () => {
  const { createElement } = useBoardContext();

  const [isCreateColumnOpen, setCreateColumnOpen] = useState(false);
  const [isCreateTicketOpen, setCreateTicketOpen] = useState(false);
  const [isOtherProjectsOpen, setOtherProjectsOpen] = useState(false);

  const handleCreateColumnOpen = (boolean) => {
    setCreateColumnOpen(boolean);
    if (boolean) {
      setCreateTicketOpen(false);
      setOtherProjectsOpen(false);
    }
  };

  const handleCreateTicketOpen = (boolean) => {
    setCreateTicketOpen(boolean);
    if (boolean) {
      setCreateColumnOpen(false);
      setOtherProjectsOpen(false);
    }
  };

  const handleOtherProjectsOpen = (boolean) => {
    setOtherProjectsOpen(boolean);
    if (boolean) {
      setCreateColumnOpen(false);
      setCreateTicketOpen(false);
    }
  };

  return (
    <MenuWrapper>
      <Item>
        <ItemContent>
          <Link to="/">Jiro</Link>
        </ItemContent>
      </Item>
      {/* <Item>
        <ButtonNewSprint>
          <IconPlus /> New Sprint
        </ButtonNewSprint>
      </Item> */}
      <Item>
        <ItemContent onClick={() => handleCreateTicketOpen(true)}>
          <IconPlus /> Ticket
        </ItemContent>
        {isCreateTicketOpen && (
          <SmallModal
            hasButton
            name="ticket"
            onValidate={createElement}
            onClose={() => handleCreateTicketOpen(false)}
          />
        )}
      </Item>
      <Item>
        <ItemContent onClick={() => handleCreateColumnOpen(true)}>
          <IconPlus /> Column
        </ItemContent>
        {isCreateColumnOpen && (
          <SmallModal
            hasButton
            name="column"
            onValidate={createElement}
            onClose={() => handleCreateColumnOpen(false)}
          />
        )}
      </Item>
      <Item>
        <ItemContent onClick={() => handleOtherProjectsOpen(true)}>
          Other projects
        </ItemContent>
        {isOtherProjectsOpen && (
          <ProjectsModal onClose={() => handleOtherProjectsOpen(false)} />
        )}
      </Item>
    </MenuWrapper>
  );
};

export default Menu;

const MenuWrapper = styled.div`
  align-items: center;
  background-color: white;
  border-radius: 0 20px 20px 0;
  box-shadow: 0 1px 60px 0 rgb(69 129 192 / 10%);

  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 150px;

  svg {
    height: 15px;
    margin-right: 5px;
    width: 15px;
  }

  a {
    color: #365ed2;
    font-family: Noah Bold;
    font-weight: bolder;
    text-decoration: none;
  }
`;

const Item = styled.div`
  border-radius: 10px;
  cursor: pointer;
  height: 50px;
  margin: 10px 20px;
  position: relative;
  text-align: center;
  width: calc(100% - 40px);

  &:hover {
    background-color: #f7f9fe;
  }
`;

const ItemContent = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  white-space: nowrap;
  width: 100%;
`;

// const ButtonNewSprint = styled(ItemContent)`
//   align-items: center;
//   background: #365ed3;
//   border-radius: 10px;
//   color: white;

//   &:hover {
//     background-color: #2145ae;
//   }
// `;
