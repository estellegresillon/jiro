import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "assets/styles/base.css";
import TopBar from "components/common/TopBar";
import Board from "components/Board";
import Ticket from "components/Ticket";
import { BoardProvider } from "contexts";

const App = () => (
  <BrowserRouter>
    <BoardProvider>
      <React.Fragment>
        <TopBar />
        <Routes>
          <Route exact path="/" element={<Board />} />
          <Route exact path="/ticket:id" element={<Ticket />} />
        </Routes>
      </React.Fragment>
    </BoardProvider>
  </BrowserRouter>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
