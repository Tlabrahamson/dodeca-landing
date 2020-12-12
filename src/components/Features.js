import styled from "styled-components";

const FeaturesWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  position: relative;
  margin-top: 16rem;
  justify-items: center;

  article {
    width: 368px;

    .icon-placeholder {
      width: 50px;
      height: 50px;
      background: #6055d7;
      border-radius: 50%;
    }

    h3 {
      font-weight: 800;
      padding: 1rem 0;
    }

    p {
      line-height: 30px;
      color: #333;
    }
  }
`;

export default function Features() {
  return (
    <FeaturesWrapper>
      <article>
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

      <article>
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

      <article>
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
