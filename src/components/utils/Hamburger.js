import { useState } from "react";
import styled from "styled-components";

const HamburgerWrap = styled.div`
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;

  .line-1,
  .line-2,
  .line-3 {
    background: #fefefe;
    width: 30px;
    height: 2px;
    transition: all 0.3s ease;
  }

  .line-1.active {
    transform: rotate(225deg);
    margin-bottom: -32px;
    background: #2d2d2d;
  }

  .line-2.active {
    opacity: 0;
  }

  .line-3.active {
    transform: rotate(-45deg);
    background: #2d2d2d;
  }
`;

const MenuWrap = styled.div`
  nav {
    position: absolute;
    left: 200%;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100vh;
    width: 100vw;
    background: #fff;
    z-index: 0;
    padding: 2rem;
    transition: all 0.3s ease;
  }

  li {
    list-style: none;
    text-align: right;
  }

  a {
    text-decoration: none;
    color: inherit;
    font-size: 2.5rem;
    transition: all 0.3s ease;
    &:hover {
      color: #4d4d4d;
    }
  }

  .active {
    left: 0;
  }
`;

export default function Hamburger() {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  toggle === true
    ? document.body.classList.add("active")
    : document.body.classList.remove("active");
  return (
    <>
      <HamburgerWrap className="hamburger" onClick={handleClick}>
        <div className={toggle ? "line-1 active" : "line-1"}></div>
        <div className={toggle ? "line-2 active" : "line-2"}></div>
        <div className={toggle ? "line-3 active" : "line-3"}></div>
      </HamburgerWrap>
      <MenuWrap>
        <nav className={toggle ? "active" : ""}>
          <ul>
            <li>
              <a href="https://tim-abrahamson.com">Hero</a>
            </li>
            <li>
              <a href="https://tim-abrahamson.com">Features</a>
            </li>
            <li>
              <a href="https://tim-abrahamson.com">How it Works</a>
            </li>
            <li>
              <a href="https://tim-abrahamson.com">Social Response</a>
            </li>
            <li>
              <a href="https://tim-abrahamson.com">Sign Up</a>
            </li>
          </ul>
        </nav>
      </MenuWrap>
    </>
  );
}
