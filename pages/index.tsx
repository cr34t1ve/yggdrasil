import type { NextPage } from 'next';
import styled from 'styled-components';
import Head from 'next/head';
import { sand } from '@radix-ui/colors';
import { Navbar } from '@/components/index';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Casprine Assempah</title>
      </Head>
      <Wrappper className="container">
        <Navbar />
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
