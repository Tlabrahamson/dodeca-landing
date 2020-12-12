import styled from "styled-components";

import gradient from "../assets/teal-gradient.png";

const SocialQuoteWrapper = styled.section`
  position: relative;
  padding: 8rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    position: relative;
    z-index: -1;
  }

  article {
    position: absolute;
    width: 1045px;
    h2 {
      padding-bottom: 1rem;
      color: #fefefe;
    }

    h3 {
      text-align: right;
      color: #f1f1f1;
    }
  }
`;

export default function SocialQuote() {
  return (
    <SocialQuoteWrapper>
      <img src={gradient} alt="A teal gradient background" />
      <article>
        <h2>"I have no clue what this is but, it's hype!"</h2>
        <h3>- Jimmy Jenkins</h3>
      </article>
    </SocialQuoteWrapper>
  );
}
