import styled from "styled-components";

import IconQuestion from "components/common/IconQuestion";
import Tooltip from "components/common/Tooltip";
import { useBoardContext } from "contexts";

const BoardHeader = () => {
  const { canDragColumns, setCanDragColumns } = useBoardContext();

  return (
    <BoardHeaderWrapper>
      <HeaderCard>
        <CardContent>
          <h1>Sprint #89</h1>
          <ActionWrapper>
            <div className="manage-board-text">Manage Board</div>
            <ToggleButton
              onClick={() => setCanDragColumns(!canDragColumns)}
              $canDragColumns={canDragColumns}
            >
              <div className="toggle-button" />
            </ToggleButton>
            <Tooltip icon={<IconQuestion />}>
              <span>Permits columns and tickets removal</span>
            </Tooltip>
          </ActionWrapper>
        </CardContent>
      </HeaderCard>
    </BoardHeaderWrapper>
  );
};

export default BoardHeader;

const BoardHeaderWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 30vh;
  width: 100%;
`;

const HeaderCard = styled.div`
  align-items: flex-start;
  background-color: white;
  border-radius: 25px;
  box-shadow: 0 1px 60px 0 rgb(69 129 192 / 10%);
  display: flex;
  justify-content: center;
  height: 60%;
  position: relative;
  width: 90%;
`;

const CardContent = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 90%;

  h1 {
    font-family: Noah Bold;
    font-weight: bolder;
    margin: 10px 0;
  }
`;

const ActionWrapper = styled.div`
  align-items: center;
  display: flex;

  .manage-board-text {
    width: 120px;
  }

  svg {
    color: #365ed3;
    cursor: pointer;
    height: 15px;
    margin-left: 8px;
    width: 15px;

    &:hover {
      color: #092578;
    }
  }
`;

const ToggleButton = styled.div`
  align-items: center;
  background-color: #edf0fa;
  border-radius: 25px;
  cursor: pointer;
  display: flex;
  height: 26px;
  justify-content: flex-start;
  width: 50px;

  .toggle-button {
    background-color: ${({ $canDragColumns }) =>
      $canDragColumns ? "#365ed3" : "white"};
    border-radius: 50%;
    height: 20px;
    margin: 3px;
    margin-left: ${({ $canDragColumns }) => ($canDragColumns ? "26px" : "3px")};
    transition: 1s all ease;
    width: 20px;
  }
`;
