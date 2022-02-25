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
  background: white;
  background: linear-gradient(
    324deg,
    rgba(231, 240, 252, 1) 0%,
    rgba(255, 255, 255, 1) 29%,
    rgba(255, 255, 255, 1) 51%,
    rgba(255, 255, 255, 1) 72%,
    rgba(254, 236, 253, 1) 100%
  );
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
