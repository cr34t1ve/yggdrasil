import type { NextPage } from 'next';
import styled from 'styled-components';
import Head from 'next/head';
import { sand } from '@radix-ui/colors';
import { Navbar, ExperimentBlock, WritingBlock, WritingBlockProps, Footer } from '@/components/index';

import { getwritingsmeta } from '@/lib/index';

interface HomeProps {
  posts: WritingBlockProps[];
}

const Home: NextPage<HomeProps> = ({ posts }) => {
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

        <section className="writing">
          <h3 className="section-header">Selected Writing</h3>

          {posts.map((post: WritingBlockProps, index: number) => (
            <WritingBlock key={index} {...post} />
          ))}
        </section>

        <section className="experiments">
          <h3 className="section-header">Recent Experiments</h3>
          <div className="grid">
            <ExperimentBlock />
            <ExperimentBlock />
          </div>
        </section>
      </Wrappper>
      <Footer />
    </>
  );
};

const Wrappper = styled.main`
  padding: 10vh 0;

  .about {
    padding-top: 60px;
    .name {
      font-family: 'PTSerif';
      font-size: 25px;
      color: ${sand.sand5};
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

  .experiments,
  .writing {
    padding-top: 50px;

    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
    }
  }

  .section-header {
    font-family: 'PTSerif';
    color: ${sand.sand8};
    font-size: 18px;
    cursor: pointer;
  }

  * {
    outline: 1px dotted red;
  }
`;

export default Home;

export const getStaticProps = async () => {
  const writingMeta: WritingBlockProps[] = await getwritingsmeta();

  return {
    props: {
      posts: writingMeta,
    },
  };
};
