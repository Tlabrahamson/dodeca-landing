import styled from "styled-components";

const FeaturesWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 4rem;
  position: relative;
  margin-top: 16rem;

  article {
    max-width: 368px;
    width: 100%;

    .icon-placeholder {
      width: 50px;
      height: 50px;
      background: #6055d7;
      border-radius: 50%;
    }

    h3 {
      padding: 1rem 0;
    }
  }

  @media screen and (max-width: 1366px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-items: center;

    article {
      max-width: 100%;
    }
  }
`;

export default function Features() {
  return (
    <FeaturesWrapper>
      <article data-aos="fade-up">
        <div className="icon-placeholder"></div>
        <h3>Lorem ipsum</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu elit
          pulvinar, consectetur dui vitae, feugiat sem. In sollicitudin risus id
          nibh tempus, vel fringilla urna lacinia. Sed vitae placerat erat.
          Curabitur auctor rutrum consequat. Nullam luctus, neque vel
          sollicitudin vestibulum.
        </p>
      </article>

      <article data-aos="fade-up">
        <div className="icon-placeholder"></div>
        <h3>Lorem ipsum</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu elit
          pulvinar, consectetur dui vitae, feugiat sem. In sollicitudin risus id
          nibh tempus, vel fringilla urna lacinia. Sed vitae placerat erat.
          Curabitur auctor rutrum consequat. Nullam luctus, neque vel
          sollicitudin vestibulum.
        </p>
      </article>

      <article data-aos="fade-up">
        <div className="icon-placeholder"></div>
        <h3>Lorem ipsum</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu elit
          pulvinar, consectetur dui vitae, feugiat sem. In sollicitudin risus id
          nibh tempus, vel fringilla urna lacinia. Sed vitae placerat erat.
          Curabitur auctor rutrum consequat. Nullam luctus, neque vel
          sollicitudin vestibulum.
        </p>
      </article>
    </FeaturesWrapper>
  );
}
