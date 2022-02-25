import styled from "styled-components";

const Input = ({ name, onChange, value }) => (
  <InputWrapper>
    <input type="text" name={name} value={value} onChange={onChange} />
  </InputWrapper>
);

export default Input;

const InputWrapper = styled.div`
  input {
    background-color: white;
    border: none;
    border-radius: 5px;
    box-shadow: 0 1px 36.5px 0 rgb(0 0 0 / 10%);
    height: 40px;
    outline: 0;
    padding-left: 20px;
    width: 80%;
  }
`;
