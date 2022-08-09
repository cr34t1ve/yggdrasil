import { FC } from 'react';
import styled from 'styled-components';
import { sand } from '@radix-ui/colors';

interface MagicLinkProps {
  url: string;
  text: string;
  classname?: string;
  invertColor?: boolean;
}

export const MagicLink: FC<MagicLinkProps> = ({ url, text, classname, invertColor }) => {
  return (
    <StyledLink href={url} target="_blank" rel="noreferrer" className={classname} invertColor={invertColor}>
      <p className="magic-link-text">{text}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="7" y1="17" x2="17" y2="7"></line>
        <polyline points="7 7 17 7 17 17"></polyline>
      </svg>
    </StyledLink>
  );
};

const StyledLink = styled.a<{ invertColor?: boolean }>`
  display: inline-flex;
  align-items: center;

  p {
    color: ${sand.sand6};
    background-image: linear-gradient(gray, gray);
    background-size: 100% 1.2px;
    background-position: left 1.27em;
    background-repeat: no-repeat;
  }

  svg {
    color: ${sand.sand6};
  }
`;
