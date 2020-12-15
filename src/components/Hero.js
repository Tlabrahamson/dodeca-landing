import styled from "styled-components";
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
    z-index: -1;
  }

  article {
    min-width: 762px;
    margin-top: 61px;

    h1 {
      color: #fefefe;
    }

    p {
      font-size: 24px;
      line-height: 40px;
      color: #f1f1f1;
      margin: 40px 0;
    }

    span {
      font-weight: 800;
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
  }

  @media screen and (max-width: 1366px) {
    article {
      min-width: 600px;
      p {
        font-size: 16px;
        line-height: 30px;
        margin: 20px 0;
      }
    }

    .person {
      width: 40%;
    }
  }

  @media screen and (max-width: 768px) {
    margin-top: 60px;
    flex-direction: column;

    article {
      min-width: 100%;

      h1 {
        line-height: 40px;
      }
    }

    .person {
      margin-top: 60px;
      width: 80%;
    }
  }
`;

export default function Hero() {
  return (
    <HeroWrapper>
      <svg
        width="1920"
        height="1080"
        viewBox="0 0 1920 1080"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="hero-gradient"
      >
        <path
          d="M0 0H1920V538.511C1390.03 697.971 955.637 751.57 0 800V0Z"
          fill="url(#paint0_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="845"
            y1="-280"
            x2="2037.02"
            y2="408.443"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#2A1DCA" stopOpacity="0.75" />
            <stop offset="0.291667" stopColor="#1D4DCA" stopOpacity="0.75" />
            <stop offset="1" stopColor="#1DCAAB" stopOpacity="0.75" />
          </linearGradient>
        </defs>
      </svg>

      <article data-aos="fade-in" data-aos-delay="100">
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
        data-aos="fade-in"
        data-aos-delay="100"
        src={person}
        alt="A 3D model of a person holding a phone."
      />
    </HeroWrapper>
  );
}
