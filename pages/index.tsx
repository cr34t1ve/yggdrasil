import type { NextPage } from 'next';
import styled from 'styled-components';
import Link from 'next/link';
import Head from 'next/head';
import { sand } from '@radix-ui/colors';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Casprine Assempah</title>
      </Head>
      <Wrappper className="container">
        <header className="home-header">
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
        </header>

        <section className="about">
          <h1 className="name">Casprine Assempah</h1>
          <p>
            Software engineer working on design systems{' '}
            <a target="_blank" href="https://chippercash.com/" rel="noreferrer">
              <em>@chippercash</em>
            </a>
          </p>
          <p>
            Occasionally drawing with <em>Procreate</em> and exploring native app developement with <em>SwiftUI.</em>
          </p>
        </section>
      </Wrappper>
    </>
  );
};

const Wrappper = styled.main`
  padding-top: 10vh;

  .home-header {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .nav-links {
      a {
        font-size: 16px;
        margin: 0 10px;
      }
    }
  }

  .about {
    padding-top: 60px;
    .name {
      font-family: 'DavidLibre';
      font-weight: 700;
      font-size: 25px;
    }

    p {
      color: ${sand.sand9};
      font-size: 18px;
      line-height: 1.5;
    }

    em {
      text-decoration: none;
      font-style: normal;
      color: ${sand.sand4};
      font-size: 18px;
    }
  }
`;

export default Home;
