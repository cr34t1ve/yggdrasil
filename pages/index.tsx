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
        <Wrapper>
          {/* <h1 className="name">Casprine Assempah</h1> */}

          <section className="mini-bio">
            <p>
              Hi, I'm Casprine, a software engineer based in Rotterdam & Half of{' '}
              <MagicLink text="The Sunday Studio" url="https://thesunday.studio" />. Currently interested in design
              systems, exploring native development with <em>SwiftUI</em> and generative art with <em>Procreate</em>
            </p>
          </section>

          <section className="work">
            <h4 className="section-header">Work</h4>
            {/* <p>
              I currently work at <MagicLink text="Okra" url="https://okra.ng" /> building open finances products for
              African businesses.
            </p> */}
            <p>
              In the past, I led the design system team at{' '}
              <MagicLink text="ChipperCash" url="https://chippercash.com" /> where we provide solutions to send and
              receive money across Africa the fast and easy way. More of previous adventures can be found{' '}
              <Link href="/work">here</Link>.
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
        </Wrapper>

        <NowPlaying />
      </PageLayout>
    </>
  );
};

const Wrapper = styled.main`
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
    color: ${sand.sand5};
  }

  section {
    margin-bottom: 70px;
  }

  p {
    margin-top: 10px;
    font-size: 20px;
    line-height: 32px;

    .magic-link-text {
      margin: inherit;
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
