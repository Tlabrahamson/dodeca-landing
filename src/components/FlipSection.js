import styled from "styled-components";

// Images
import conversation from "../assets/conversation.png";
import castle from "../assets/castle.png";
import ship from "../assets/ship.png";

const FlipSectionWrapper = styled.section`
  width: 100%;
  article {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8rem;

    h2 {
      padding: 1rem 0;
      line-height: 56px;
    }

    h3 {
      font-weight: 600;
      line-height: 56px;
    }

    p {
      color: #333;
      width: 368px;
      line-height: 30px;
    }
  }

  .reverse-article {
    flex-direction: row-reverse;
  }
`;

export default function FlipSection() {
  return (
    <FlipSectionWrapper>
      <article>
        <img
          src={conversation}
          alt="Two abstract people having a conversation."
        />
        <div>
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
        <img src={castle} alt="A castle on a floating platform." />
        <div>
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
        <img src={ship} alt="A landed rocket ship." />
        <div>
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
