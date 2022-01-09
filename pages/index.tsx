import type { NextPage } from 'next';
import styled from 'styled-components';
import Head from 'next/head';
import {
  PageMeta,
  Navbar,
  MagicLink,
  ExperimentBlock,
  WritingBlock,
  WritingBlockProps,
  Footer,
} from '@/components/index';

import { sand } from '@radix-ui/colors';
import { experiments, ExperimentType } from '@/lib/data';

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
            Software engineer working on design systems <MagicLink url="https://chippercash.com/" text="ChipperCash" />
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
            {experiments.slice(0, 2).map((experiemnt: ExperimentType, index: number) => (
              <ExperimentBlock {...experiemnt} key={index} />
            ))}
          </div>
        </section>
      </Wrappper>
      <Footer />
    </>
  );
};

const Wrappper = styled.main`
  .about {
    padding-top: 60px;
    .name {
      font-size: 25px;
      font-weight: 600;
      color: ${sand.sand5};
    }

    p {
      color: ${sand.sand9};
      font-size: 18px;
      line-height: 1.5;
      font-weight: 500;
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
    color: ${sand.sand9};
    font-size: 18px;
    cursor: pointer;
    font-weight: 600;

    @media (max-width: 720px) {
      color: ${sand.sand7};
      font-size: 20px;
    }
  }
`;

export default Home;

export const getStaticProps = async () => {
  const writingMeta: WritingBlockProps[] = await getwritingsmeta();
  const enviroment: 'development' | 'production' | 'test' = process.env.NODE_ENV;
  const posts = enviroment === 'development' ? writingMeta : writingMeta.filter((item) => Boolean(item.published));

  return {
    props: {
      posts,
    },
  };
};
