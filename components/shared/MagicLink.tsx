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
      {text}
    </StyledLink>
  );
};

const StyledLink = styled.a<{ invertColor?: boolean }>`
  display: inline-block;
  font-size: 17px;
  transition: border-color 100ms ease-in-out;
  border-bottom: 1px solid transparent;
  color: ${({ invertColor }) => (invertColor ? sand.sand9 : sand.sand7)};

  :hover {
    border-bottom-color: white;
    color: white;
  }

  ::after {
    content: '↗';
    margin-left: 0.3rem;
  }
`;
