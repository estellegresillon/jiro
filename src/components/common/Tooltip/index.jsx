import styled from "styled-components";

const Tooltip = ({ children, icon }) => (
  <TooltipWrapper>
    {icon}
    <div className="tooltip-content">{children}</div>
  </TooltipWrapper>
);

export default Tooltip;

const TooltipWrapper = styled.div`
  display: flex;
  position: relative;

  &:hover {
    .tooltip-content {
      display: block;
    }
  }

  .tooltip-content {
    background-color: white;
    box-shadow: 0 1px 40px 0 rgb(69 129 192 / 15%);
    display: none;
    padding: 20px;
    position: absolute;
    top: 25px;
    white-space: nowrap;
    z-index: 1;
  }
`;
