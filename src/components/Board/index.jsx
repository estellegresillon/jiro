import styled from "styled-components";

import BoardContent from "./BoardContent";
import BoardHeader from "./BoardHeader";

const Board = () => (
  <BoardWrapper>
    <BoardHeader />
    <BoardContent />
  </BoardWrapper>
);

export default Board;

const BoardWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
  position: relative;
  flex-direction: column;
  width: calc(100% - 150px);
`;
