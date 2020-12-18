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
  display: none;

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

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    z-index: 2;
    width: 50px;
    height: 30px;
    cursor: pointer;
  }
`;

const MenuWrap = styled.div`
ul {
  list-style: none;
  display: flex;
  align-items: center;
}

a {
  color: #fefefe;
  text-decoration: none;
  margin-left: 4rem;
  transition: all 0.3s ease;
  &:hover {
    color: #2d2d2d;
  }
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
    nav {
      position: absolute;
      left: 200%;
      top: 0;
      display: flex;
      justify-content: center;
      height: 100vh;
      width: 100vw;
      background: #fff;
      z-index: 1;
      padding: 2rem;
      transition: all 0.3s ease;
    }

    ul {
      flex-direction: column;
      justify-content: space-evenly;
      height: 100%;
    }

    li {
      list-style: none;
      text-align: right;
    }

    a {
      text-decoration: none;
      color: #2d2d2d;
      font-size: 2.5rem;
      transition: all 0.3s ease;
      margin: 0;
      &:hover {
        color: #4d4d4d;
      }

      &:last-child {
        color: #fefefe;
      }
    }

    .active {
      left: 0;
    }
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
      </MenuWrap>
    </>
  );
}
