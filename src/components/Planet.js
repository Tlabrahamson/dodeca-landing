import styled from "styled-components";
// Images
import planet from "../assets/planet.png";
import gradient from "../assets/planet-gradient.png";

const PlanetWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16rem 0;
  position: relative;

  .gradient-background {
    position: absolute;
    z-index: -1;
    right: -16rem;
  }

  h2 {
    padding-bottom: 3rem;
  }

  article {
    padding-bottom: 4rem;
    h3 {
      line-height: 56px;
      padding-bottom: 1rem;
      font-weight: 600;
    }

    p {
      width: 368px;
      line-height: 30px;
    }
  }

  .planet {
    width: 100%;
    max-width: 672px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;

    .gradient-background {
      bottom: -4rem;
    }
  }
`;

export default function Planet() {
  return (
    <PlanetWrapper>
      <img
        className="gradient-background"
        src={gradient}
        alt="Gradient background"
      />
      <div>
        <h2>Lorem ipsum</h2>
        <article>
          <h3>Lorem ipsum</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu
            elit pulvinar, consectetur dui vitae, feugiat sem. In sollicitudin
            risus id nibh tempus, vel fringilla urna lacinia. Sed vitae placerat
            erat. Curabitur auctor rutrum consequat. Nullam luctus, neque vel
            sollicitudin vestibulum.
          </p>
        </article>
        <article>
          <h3>Lorem ipsum</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu
            elit pulvinar, consectetur dui vitae, feugiat sem. In sollicitudin
            risus id nibh tempus, vel fringilla urna lacinia. Sed vitae placerat
            erat. Curabitur auctor rutrum consequat. Nullam luctus, neque vel
            sollicitudin vestibulum.
          </p>
        </article>
      </div>
      <img className="planet" src={planet} alt="A 3D planet with trees." />
    </PlanetWrapper>
  );
}
