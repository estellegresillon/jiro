import styled from "styled-components";

const VisitOnDesktop = () => (
  <VisitDesktopWrapper>
    Use this app on a dekstop device or a larger window.
  </VisitDesktopWrapper>
);

export default VisitOnDesktop;

const VisitDesktopWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  text-align: center;
  width: 70vw;
`;
