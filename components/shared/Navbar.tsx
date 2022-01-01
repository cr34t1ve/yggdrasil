import styled from 'styled-components';
import Link from 'next/link';

export const Navbar = () => (
  <StyledHeader>
    <div className="nav-links flex">
      <Link href="/writing" passHref>
        <a className="nav-link">Writing</a>
      </Link>
      <Link href="/experiments" passHref>
        <a className="nav-link">Experiments</a>
      </Link>
      <Link href="/procreate" passHref>
        <a className="nav-link">Procreate</a>
      </Link>
    </div>
  </StyledHeader>
);

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .nav-links {
    a {
      font-size: 16px;
      margin: 0 10px;
    }
  }
`;
