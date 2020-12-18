import styled from "styled-components";
import Hamburger from "./utils/Hamburger";

const HeaderWrapper = styled.header`
  height: 5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h4 {
    font-weight: 600;
    color: #fefefe;
  }
`;

export default function Navbar() {
  return (
    <HeaderWrapper>
      <h4>Dodeca</h4>
      <div>
        <Hamburger />
      </div>
    </HeaderWrapper>
  );
}
