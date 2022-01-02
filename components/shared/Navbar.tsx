import styled from 'styled-components';
import { useRouter } from 'next/router';
import Link from 'next/link';
// import { sand } from '@radix-ui/colors';
// import { route } from 'next/dist/server/router';

export const Navbar = () => {
  const router = useRouter();

  const isActiveLink = (link: string) => (router.pathname.includes(link) ? 'active-nav-link' : '');

  const isHomePage = router.pathname === '/';

  return (
    <StyledHeader>
      {!isHomePage && (
        <div onClick={() => router.back()}>
          <p className="home-link">Back</p>
        </div>
      )}
      <div className="nav-links flex">
        <Link href="/writing" passHref>
          <a className={`nav-link ${isActiveLink('writing')}`}>Writing</a>
        </Link>
        <Link href="/experiments" passHref>
          <a className={`nav-link ${isActiveLink('experiment')}`}>Experiments</a>
        </Link>
        {/* <Link href="/procreate" passHref>
          <a className={`nav-link ${isActiveLink('procreate')}`}>Procreate</a>
        </Link> */}
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

      &:last-child {
        padding-right: 0;
      }
    }

    .active-nav-link {
      text-decoration: line-through;
    }
  }

  .home-link {
    font-family: 'PTSerif';
    font-size: 17px;
    cursor: pointer;

    :hover {
      background: linear-gradient(90deg, rgb(255, 154, 158) 0%, rgb(254, 207, 239) 99%, rgb(254, 207, 239) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;
