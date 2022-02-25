import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";

import "assets/styles/base.css";
import Menu from "components/common/Menu";
import Board from "components/Board";
import Ticket from "components/Ticket";
import { BoardProvider } from "contexts";

const AppWrapper = styled.div`
  align-items: center;
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  height: 100vh;
  position: relative;
  width: 100%;
`;

const App = () => (
  <AppWrapper>
    <BrowserRouter>
      <BoardProvider>
        <Menu />
        <Routes>
          <Route exact path="/" element={<Board />} />
          <Route exact path="/ticket:id" element={<Ticket />} />
        </Routes>
      </BoardProvider>
    </BrowserRouter>
  </AppWrapper>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
