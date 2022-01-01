import styled from 'styled-components';
import Router, { useRouter } from 'next/router';
import Link from 'next/link';

export const Navbar = () => {
  const router = useRouter();

  const isActiveLink = (link: string) => (router.pathname.includes(link) ? 'active-nav-link' : '');

  return (
    <StyledHeader>
      <div className="nav-links flex">
        <Link href="/writing" passHref>
          <a className={`nav-link ${isActiveLink('writing')}`}>Writing</a>
        </Link>
        <Link href="/experiments" passHref>
          <a className={`nav-link ${isActiveLink('experiment')}`}>Experiments</a>
        </Link>
        <Link href="/procreate" passHref>
          <a className={`nav-link ${isActiveLink('procreate')}`}>Procreate</a>
        </Link>
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .nav-links {
    a {
      font-size: 16px;
      padding: 0 10px;

      &:last-child {
        padding-right: 0;
      }
    }

    .active-nav-link {
      text-decoration: line-through;
    }
  }
`;
