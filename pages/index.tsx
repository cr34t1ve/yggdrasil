import type { NextPage } from 'next';
import styled from 'styled-components';
import { PageLayout, WritingBlockProps, MagicLink, NowPlaying } from '@/components/index';

import { sand } from '@radix-ui/colors';

import { getwritingsmeta } from '@/lib/index';
import Link from 'next/link';

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
              {"I'm"} a software engineer based in Rotterdam. Currently interested in design, generative art with{' '}
              <em>Procreate</em> and exploring native development with <em>SwiftUI.</em>
            </p>
          </section>

          <section className="work">
            <h4 className="section-header">Work</h4>
            <p>
              I currently work at <MagicLink text="Okra" url="https://okra.ng" /> working on open finance service for
              African businesses.
            </p>

            <p>
              In the past, I currently lead the design system team at{' '}
              <MagicLink text="ChipperCash" url="https://chippercash.com" /> where we provide solutions to send and
              receive money across Africa the fast and easy way. More of past adventures can be found{' '}
              <Link href="/resume">here</Link>.
              {/* In the past, I worked at{' '}
              <MagicLink text="Float" url="https://float.africa/" /> where I worked on the website and web platform. */}
            </p>
          </section>

          <section className="writings">
            <h4 className="section-header">Writing</h4>
          </section>

          <section className="experiments">
            <h4 className="section-header">Experiment</h4>
          </section>
        </Wrappper>
        <NowPlaying />
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

  h4 {
    color: ${sand.sand6};
    font-weight: 400;
    margin-bottom: 10px;
  }

  em {
    color: ${sand.sand6};
  }

  section {
    margin-bottom: 70px;
  }

  p {
    margin-top: 10px;
    .magic-link-text {
      margin: inherit;
    }
  }

  * {
    /* outline: 1px dotted red; */
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
