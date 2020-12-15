import styled from "styled-components";

import avatar from "../assets/avatar.png";

const CardSectionWrapper = styled.section`
  margin-top: 8rem;
  margin-bottom: 16rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  grid-gap: 4rem;
  article {
    max-width: 400px;
    width: 100%;
    min-height: 500px;
    height: 100%;
    background: #ffffff;
    box-shadow: 2px 4px 12px #dfdfdf;
    border-radius: 12px;
    padding: 2rem 1rem;

    h3 {
      padding: 1rem 0;
    }
  }

  .middle-card {
    margin-top: -4rem;
  }

  @media screen and (max-width: 1366px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;

    .middle-card {
      margin: 0;
    }
  }
`;

export default function CardSection() {
  return (
    <CardSectionWrapper>
      <article data-aos="slide-right">
        <img src={avatar} alt="An avatar" />
        <h3>Johno Jenkins</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu elit
          pulvinar, consectetur dui vitae, feugiat sem. In sollicitudin risus id
          nibh tempus, vel fringilla urna lacinia. Sed vitae placerat erat.
          Curabitur auctor rutrum consequat. Nullam luctus, neque vel
          sollicitudin vestibulum.
        </p>
      </article>

      <article data-aos="flip-up" className="middle-card">
        <img src={avatar} alt="An avatar" />
        <h3>Tom Anderson</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu elit
          pulvinar, consectetur dui vitae, feugiat sem. In sollicitudin risus id
          nibh tempus, vel fringilla urna lacinia. Sed vitae placerat erat.
          Curabitur auctor rutrum consequat. Nullam luctus, neque vel
          sollicitudin vestibulum.
        </p>
      </article>

      <article data-aos="slide-left">
        <img src={avatar} alt="An avatar" />
        <h3>Billy Brasko</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu elit
          pulvinar, consectetur dui vitae, feugiat sem. In sollicitudin risus id
          nibh tempus, vel fringilla urna lacinia. Sed vitae placerat erat.
          Curabitur auctor rutrum consequat. Nullam luctus, neque vel
          sollicitudin vestibulum.
        </p>
      </article>
    </CardSectionWrapper>
  );
}
