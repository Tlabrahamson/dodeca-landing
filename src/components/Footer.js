import styled from "styled-components";

import letter from "../assets/letter.png";

const FooterWrapper = styled.section`
  background: linear-gradient(95.64deg, #6055d7 0%, #b6b0ef 195.59%);
  margin: 0 -16rem;

  article {
    padding: 16rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h2 {
      color: #fefefe;
    }

    p {
      color: #f1f1f1;
    }
  }

  footer {
    color: #fefefe;
    padding: 1rem 16rem;
  }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <article>
        <div>
          <h2>You Heard it Here First</h2>
          <p>Subscribe to our newsletter to stay up to date</p>
        </div>
        <img src={letter} alt="A giant letter" />
      </article>
      <footer>
        <p>© 2020 Dodeca</p>
      </footer>
    </FooterWrapper>
  );
}
