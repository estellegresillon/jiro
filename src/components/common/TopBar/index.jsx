import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { useBoardContext } from "contexts";
import { useOnClickOutside } from "hooks/useOnClickOutside";

import Menu from "../Menu";

const TopBar = () => {
  const { createElement } = useBoardContext();
  const ref = useRef();
  const [isMenuOpen, setMenuOpen] = useState(false);
  useOnClickOutside(ref, () => setMenuOpen(false));

  return (
    <TopBarWrapper>
      <div>
        <Link to="/">Board</Link>
      </div>
      <div onClick={() => setMenuOpen(true)}>Create</div>
      {isMenuOpen && <Menu menuRef={ref} onClose={() => setMenuOpen(false)} />}
      <div onClick={() => createElement("column")}>+Column</div>
    </TopBarWrapper>
  );
};

export default TopBar;

const TopBarWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  position: relative;
  width: 100px;

  div {
    margin: 20px;
    text-align: center;
  }
`;
