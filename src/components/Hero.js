import styled from "styled-components";
import gradient from "../assets/hero-gradient.png";
import person from "../assets/hero-person.png";

const HeroWrapper = styled.section`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: 120px;

  .hero-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
  }

  article {
    width: 762px;
    margin-top: 61px;

    h1 {
      font-weight: 800;
      line-height: 70px;
      color: #fefefe;
    }

    p {
      font-size: 24px;
      line-height: 40px;
      color: #f1f1f1;
      margin: 40px 0;
    }

    span {
      font-weight: 700;
    }
  }

  button {
    font-size: 24px;
    padding: 10px;
    width: 123px;
    height: 49px;

    background: linear-gradient(
      99.02deg,
      rgba(112, 0, 255, 0.5) 0%,
      rgba(241, 74, 214, 0.5) 100%
    );
    box-shadow: -2px 4px 6px rgba(0, 0, 0, 0.09);
    border-radius: 6px;
    border: none;
    color: #fefefe;
    font-weight: 400;
  }

  .person {
    width: 100%;
    max-width: 560px;
  }
`;

export default function Hero() {
  return (
    <HeroWrapper>
      <img
        className="hero-gradient"
        src={gradient}
        alt="Gradient for the hero background."
      />
      <article>
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu elit
          pulvinar, consectetur dui vitae, feugiat sem. In sollicitudin risus id
          nibh tempus, <span>vel fringilla urna lacinia.</span>
        </p>
        <button>Discover</button>
      </article>
      <img
        className="person"
        src={person}
        alt="A 3D model of a person holding a phone."
      />
    </HeroWrapper>
  );
}