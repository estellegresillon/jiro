import { useState } from "react";
import styled from "styled-components";

import IconClose from "components/common/IconClose";

import Input from "../Input";

const SmallModal = ({ name, onValidate, onClose }) => {
  const [value, setValue] = useState("");

  const onClick = () => {
    onValidate(name, value);
    setValue("");
    onClose();
  };

  return (
    <SmallModalWrapper>
      <CloseButton onClick={onClose}>
        <IconClose />
      </CloseButton>
      <Input
        name={name}
        onChange={(event) => setValue(event.target.value)}
        placeholder={`Enter a name for your ${name}`}
        value={value}
      />
      <CreateButton onClick={onClick}>Create</CreateButton>
    </SmallModalWrapper>
  );
};

export default SmallModal;

const SmallModalWrapper = styled.div`
  align-items: flex-start;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 1px 60px 0 rgb(69 129 192 / 15%);
  display: flex;
  flex-direction: column;
  left: 140px;
  position: absolute;
  top: 0px;
  width: 250px;
  z-index: 1;

  svg {
    color: #365ed2;
    height: 10px;
    width: 10px;
    margin: 5px;
  }
`;

const CloseButton = styled.div`
  border-radius: 10px;
  margin: 10px;
  text-align: center;

  &:hover {
    background-color: #f7f9fe;
  }
`;

const CreateButton = styled.div`
  border-radius: 10px;
  color: white;
  font-family: Noah Bold;
  margin: 10px;
  padding: 10px 0;
  text-align: center;
  width: calc(100% - 20px);
  background-color: #365ed3;

  &:hover {
    background-color: #2145ae;
  }
`;
