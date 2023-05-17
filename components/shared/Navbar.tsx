import styled from 'styled-components';
import { useRouter } from 'next/router';
import Link from 'next/link';

export const Navbar = () => {
  const router = useRouter();

  const isActiveLink = (link: string) => (router.pathname.includes(link) ? 'active-nav-link' : '');

  const isHomePage = router.pathname === '/';

  return (
    <StyledHeader>
      {!isHomePage && (
        <Link
          href="/"
          passHref
          className={`nav-link home-link ${isActiveLink('writing')}`}>
          Home
        </Link>
      )}

      <div className="nav-links flex">
        <Link
          href="/writings"
          passHref
          className={`nav-link ${isActiveLink('writing')}`}>
          Writings
        </Link>
        <Link
          href="/experiments"
          passHref
          className={`nav-link ${isActiveLink('experiment')}`}>
          Experiments
        </Link>

        <Link href="/work" passHref className={`nav-link ${isActiveLink('work')}`}>
          Work
        </Link>

        <Link href="/music" passHref className={`nav-link ${isActiveLink('music')}`}>
          Music
        </Link>
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  .nav-links {
    margin-left: auto;

    a {
      font-size: 16px;
      padding: 0 10px;
      font-weight: 500;

      &:last-child {
        padding-right: 0;
      }
    }

    .active-nav-link {
      text-decoration: line-through;
    }
  }

  .home-link {
    font-size: 15px;
    cursor: pointer;
    font-weight: 600;

    :hover {
      background: linear-gradient(90deg, rgb(255, 154, 158) 0%, rgb(254, 207, 239) 99%, rgb(254, 207, 239) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;
