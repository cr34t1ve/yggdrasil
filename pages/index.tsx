import type { NextPage } from 'next';
import styled from 'styled-components';
import { PageLayout, MagicLink, ExperimentBlock, WritingBlock, WritingBlockProps, Footer } from '@/components/index';

import { sand } from '@radix-ui/colors';
import { experiments, ExperimentType } from '@/lib/data';

import { getwritingsmeta } from '@/lib/index';
import Image from 'next/image';

interface HomeProps {
  posts: WritingBlockProps[];
}

const Home: NextPage<HomeProps> = ({ posts }) => {
  return (
    <>
      <PageLayout
        pageMetaProps={{
          title: 'Casprine Assempah',
          description: 'Personal space on the internet where I share my work and learnings',
        }}
      >
        <Wrappper>
          <section className="about">
            <div className="name">
              <h1>Casprine Assempah</h1>
              <p>Design Systems Engineer</p>
            </div>

            <p>
              Software engineer working on design systems at{' '}
              <MagicLink url="https://chippercash.com/" text="ChipperCash" />
            </p>
            <p>
              Occasionally drawing with <em>Procreate</em> and exploring native app developement with <em>SwiftUI.</em>
            </p>
          </section>

          <p className="test-inter">
            Playbit is a computing environment which encourages playful learning, building & sharing of software.
          </p>

          <p className="test-inter">
            Software engineer working on design systems at <br /> Occasionally drawing with Procreate and exploring
            native app developement with SwiftUI.
          </p>

          {/* <section className="writing">
            <h3 className="section-header">Selected Writing</h3>

            {posts.map((post: WritingBlockProps, index: number) => (
              <WritingBlock key={index} {...post} />
            ))}
          </section> */}

          {/* <section className="experiments">
            <h3 className="section-header">Recent Experiments</h3>
            <div className="grid">
              {experiments.slice(0, 2).map((experiemnt: ExperimentType, index: number) => (
                <ExperimentBlock {...experiemnt} key={index} />
              ))}
            </div>
          </section> */}
        </Wrappper>
      </PageLayout>

      {/* <Footer /> */}
    </>
  );
};

const Wrappper = styled.main`
  /* * {
    outline: 1px dotted;
  } */

  .test-inter {
    margin-top: 40px;
    font-size: 18px;
    line-height: 1.4;
    letter-spacing: 0.005em;
    color: ${sand.sand8};
    font-family: 'Inter';
  }

  .about {
    padding-top: 60px;

    .name {
      margin-bottom: 40px;
      h1 {
        font-size: 25px;
        color: ${sand.sand5};
        margin: 0;
        margin-top: 10px;
      }

      p {
        color: ${sand.sand8};
        font-style: italic;
        margin-top: 5px;
      }
    }

    p {
      color: ${sand.sand9};
      font-size: 18px;
      line-height: 1.5;
    }

    em {
      text-decoration: none;
      color: ${sand.sand4};
      /* font-family: 'Esteban', serif; */
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
  const posts: WritingBlockProps[] = await getwritingsmeta();

  return {
    props: {
      posts,
    },
  };
};
