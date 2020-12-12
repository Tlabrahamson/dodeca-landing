import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  height: 5rem;
  width: 100%;
  padding: 0 16rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h4 {
    font-weight: 600;
  }

  ul {
    list-style: none;
    display: flex;
  }

  a {
    color: inherit;
    text-decoration: none;
    padding-left: 4rem;
  }
`;

export default function Navbar() {
  return (
    <HeaderWrapper>
      <h4>Dodeca</h4>
      <nav>
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
          <a href="https://tim-abrahamson.com">
            <li>Link 4</li>
          </a>
        </ul>
      </nav>
    </HeaderWrapper>
  );
}
