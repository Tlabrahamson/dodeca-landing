import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebookSquare,
  faInstagram,
  faTwitterSquare
} from "@fortawesome/free-brands-svg-icons";

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
      margin-bottom: 2rem;
    }

    p {
      color: #f1f1f1;
    }

    img {
      max-width: 780px;
      width: 100%;
    }
  }

  form {
    margin-top: 40px;

    label {
      display: block;
      color: #f1f1f1;
      margin-bottom: 1rem;
    }

    div {
      display: flex;
      align-items: center;
    }

    input {
      max-width: 395px;
      width: 100%;
      height: 49px;
      font-size: 16px;
      border: none;
      border-radius: 6px;
      margin-right: 2rem;
    }

    button {
      width: 140px;
      height: 49px;
      font-size: 24px;
      background: linear-gradient(
        98.6deg,
        rgba(112, 0, 255, 0.5) -88.94%,
        rgba(241, 74, 214, 0.5) 100%
      );
      box-shadow: -2px 4px 6px rgba(0, 0, 0, 0.09);
      border: none;
      border-radius: 6px;
      color: #f1f1f1;
    }
  }

  footer {
    color: #fefefe;
    padding: 1rem 16rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      color: #fefefe;
    }

    svg {
      font-size: 24px;
      margin-left: 42px;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 1366px) {
    margin: 0 -8rem;
    article {
      padding: 8rem;

      img {
        max-width: 400px;
      }
    }

    form {
      div {
        flex-direction: column;
        align-items: flex-start;
      }
      input {
        margin-bottom: 2rem;
      }
    }

    footer {
      padding: 1rem 8rem;
    }
  }

  @media screen and (max-width: 768px) {
    article {
      flex-direction: column;

      img {
        margin-top: 8rem;
      }
    }

    form {
      button {
        width: 89px;
        height: 40px;
        font-size: 16px;
      }
    }
  }

  @media screen and (max-width: 480px) {
    margin: 0 -2rem;

    article {
      padding: 8rem 2rem;
    }

    footer {
      flex-direction: column;

      div {
        margin-top: 1rem;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-column-gap: 2rem;
      }

      svg {
        margin: 0;
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <article>
        <div>
          <h2>You Heard it Here First</h2>
          <p>Subscribe to our newsletter to stay up to date</p>
          <form>
            <label htmlFor="email">Email</label>
            <div>
              <input />
              <button>Subscribe</button>
            </div>
          </form>
        </div>
        <img src={letter} alt="A giant letter" />
      </article>
      <footer>
        <p>© 2020 Dodeca</p>
        <div>
          <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon icon={faFacebookSquare} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faTwitterSquare} />
        </div>
      </footer>
    </FooterWrapper>
  );
}
