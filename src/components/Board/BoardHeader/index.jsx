import styled from "styled-components";

import { useBoardContext } from "contexts";

const BoardHeader = () => {
  const { canDragColumns, setCanDragColumns } = useBoardContext();

  return (
    <BoardHeaderWrapper>
      <ContentWrapper>
        <div>Sprint #89</div>
        <div onClick={() => setCanDragColumns(!canDragColumns)}>
          <div>
            Move columns : <span>{canDragColumns ? "yes" : "no"}</span>
          </div>
        </div>
      </ContentWrapper>
    </BoardHeaderWrapper>
  );
};

export default BoardHeader;

const BoardHeaderWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 190px;
  width: calc(100% - 100px);
  padding: 50px;
`;

const ContentWrapper = styled.div`
  align-items: flex-start;
  background-color: white;
  border-radius: 25px;
  box-shadow: 0 1px 80px 0 rgb(0 0 0 / 15%);
  display: flex;
  flex-direction: column;
  font-weight: bolder;
  justify-content: center;
  height: calc(100% - 100px);
  padding: 50px;
  position: relative;
  width: calc(100% - 100px); ;
`;
