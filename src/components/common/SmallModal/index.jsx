import { useState } from "react";
import styled from "styled-components";

import Input from "../Input";

const SmallModal = ({ modalRef, name, onValidate, onClose }) => {
  const [value, setValue] = useState("");

  const onClick = () => {
    onValidate(name, value);
    setValue("");
  };

  return (
    <SmallModalWrapper ref={modalRef}>
      <Item onClick={onClose}>close</Item>
      <Input
        name={name}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <Item onClick={onClick}>Create</Item>
    </SmallModalWrapper>
  );
};

export default SmallModal;

const SmallModalWrapper = styled.div`
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 1px 66.5px 0 rgb(0 0 0 / 18%);
  display: flex;
  flex-direction: column;
  max-height: 500px;
  position: absolute;
  overflow: scroll;
  top: 0px;
  left: 140px;
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
