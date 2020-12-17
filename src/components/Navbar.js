/* 
  - I should go ahead and make the hamburger functional...
*/

import styled from "styled-components";

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

  .hamburger {
    display: none;
  }

  ul {
    list-style: none;
    display: flex;
    align-items: center;
  }

  a {
    color: #fefefe;
    text-decoration: none;
    margin-left: 4rem;
  }

  .button-link {
    background: linear-gradient(
      108.58deg,
      rgba(112, 0, 255, 0.5) 0%,
      rgba(241, 74, 214, 0.5) 100%
    );

    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    padding: 10px;
    position: relative;
    }
  }

  @media screen and (max-width: 1024px) {
    .hamburger {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      z-index: 2;
      width: 50px;
      height: 40px;
      cursor: pointer;
    }

    .line-1,
    .line-2,
    .line-3 {
      background: #fefefe;
      width: 30px;
      height: 4px;
    }
    
    ul {
      display: none;
    }
  }
`;

export default function Navbar() {
  return (
    <HeaderWrapper>
      <h4>Dodeca</h4>
      <nav>
        <div className="hamburger">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
        </div>
        <ul>
          <a href="https://tim-abrahamson.com">
            <li>Link 1</li>
          </a>
          <a href="https://tim-abrahamson.com">
            <li>Link 2</li>
          </a>
          <a href="https://tim-abrahamson.com">
            <li>Link 3</li>
          </a>
          <a className="button-link" href="https://tim-abrahamson.com">
            <li>Link 4</li>
          </a>
        </ul>
      </nav>
    </HeaderWrapper>
  );
}
