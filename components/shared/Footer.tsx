import styled from 'styled-components';
import { sandDark } from '@radix-ui/colors';

export const Footer = () => {
  return (
    <StyledFooter>
      {/* <NowPlaying /> */}
      <div className="container">
        <a href="https://github.com/casprine" target="_blank" rel="noreferrer">
          Github
        </a>
        <a href="https://www.linkedin.com/in/casprine-assempah-2451437b/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href="https://twitter.com/casprine_ix" target="_blank" rel="noreferrer">
          Twitter
        </a>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: ${sandDark.sand1};
  padding: 100px 0;
  border-top: 1px solid ${sandDark.sand5};

  @media (max-width: 720px) {
    padding-top: 0px;
  }

  a {
    font-size: 18px;
    padding: 0 10px;
    font-family: 'Playfair Display', serif;
    display: inline-block;

    &:last-child {
      padding-right: 0;
    }
  }
`;
