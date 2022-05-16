import type { NextPage } from 'next';
import styled from 'styled-components';
import {
  PageLayout,
  // MagicLink, ExperimentBlock, WritingBlock,
  WritingBlockProps,
  // Footer,
} from '@/components/index';

import { sand } from '@radix-ui/colors';
// import { experiments, ExperimentType } from '@/lib/data';
// import Image from 'next/image';

import { getwritingsmeta } from '@/lib/index';

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
          <h1 className="name">Casprine Assempah</h1>

          <section className="mini-bio">
            <p>
              Software Engineer working on <em>design systems</em>.
            </p>
            <p>
              Occasionally drawing with <em>Procreate</em> and exploring native app developement with <em>SwiftUI.</em>
            </p>
          </section>

          <section className="writings">
            <h4 className="section-header">Writing</h4>
          </section>

          <section className="experiments">
            <h4 className="section-header">Experiments</h4>
          </section>
        </Wrappper>
      </PageLayout>
    </>
  );
};

const Wrappper = styled.main`
  h1 {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 40px;
  }

  p {
    font-size: 18px;
    letter-spacing: 0;
    line-height: 28px;
    color: ${sand.sand9};
    font-weight: 500;
  }

  em {
    color: ${sand.sand1};
  }

  section {
    margin-bottom: 50px;
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
