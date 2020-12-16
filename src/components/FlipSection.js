import styled from "styled-components";

// Images
import conversation from "../assets/conversation.png";
import castle from "../assets/castle.png";
import ship from "../assets/ship.png";

const FlipSectionWrapper = styled.section`
  article {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8rem;

    img {
      width: 100%;
      max-width: 700px;
      min-width: 200px;
    }

    div {
      margin-left: 4rem;
    }

    h2 {
      padding: 1rem 0;
      line-height: 56px;
    }

    p {
      max-width: 368px;
    }
  }

  .reverse-article {
    flex-direction: row-reverse;

    div {
      margin-right: 4rem;
      margin-left: 0;
    }
  }

  @media screen and (max-width: 1366px) {
    article {
      img {
        width: 50%;
      }
    }
  }

  @media screen and (max-width: 768px) {
    article {
      flex-direction: column;

      div {
        margin: 0;
      }

      p {
        width: 100%;
      }

      img {
        width: 100%;
        margin-bottom: 2rem;
      }
    }

    .reverse-article {
      flex-direction: column;

      div {
        margin: 0;
      }
    }
  }
`;

export default function FlipSection() {
  return (
    <FlipSectionWrapper>
      <article>
        <img
          data-aos="fade-in"
          src={conversation}
          alt="Two abstract people having a conversation."
        />
        <div data-aos="fade-left">
          <h3>Lorem Ipsum</h3>
          <h2>Lorem Ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu
            elit pulvinar, consectetur dui vitae, feugiat sem. In sollicitudin
            risus id nibh tempus, vel fringilla urna lacinia. Sed vitae placerat
            erat. Curabitur auctor rutrum consequat. Nullam luctus, neque vel
            sollicitudin vestibulum.
          </p>
        </div>
      </article>

      <article className="reverse-article">
        <img
          data-aos="fade-in"
          src={castle}
          alt="A castle on a floating platform."
        />
        <div data-aos="fade-right">
          <h3>Lorem Ipsum</h3>
          <h2>Lorem Ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu
            elit pulvinar, consectetur dui vitae, feugiat sem. In sollicitudin
            risus id nibh tempus, vel fringilla urna lacinia. Sed vitae placerat
            erat. Curabitur auctor rutrum consequat. Nullam luctus, neque vel
            sollicitudin vestibulum.
          </p>
        </div>
      </article>

      <article>
        <img data-aos="fade-in" src={ship} alt="A landed rocket ship." />
        <div data-aos="fade-left">
          <h3>Lorem Ipsum</h3>
          <h2>Lorem Ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu
            elit pulvinar, consectetur dui vitae, feugiat sem. In sollicitudin
            risus id nibh tempus, vel fringilla urna lacinia. Sed vitae placerat
            erat. Curabitur auctor rutrum consequat. Nullam luctus, neque vel
            sollicitudin vestibulum.
          </p>
        </div>
      </article>
    </FlipSectionWrapper>
  );
}
