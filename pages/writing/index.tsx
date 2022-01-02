import type { NextPage } from 'next';
import { Navbar, PageHeader, WritingBlockProps, WritingBlock } from '@/components/index';
import styled from 'styled-components';

import { getwritingsmeta } from '@/lib/index';

interface WritingProps {
  posts: WritingBlockProps[];
}

const WritingPage: NextPage<WritingProps> = ({ posts }) => {
  return (
    <>
      <StyledWrapper className="container">
        <Navbar />
        <PageHeader title="Writing" description="" />
        <div className="writing-container">
          {posts.map((post: WritingBlockProps, index: number) => (
            <WritingBlock key={index} {...post} />
          ))}
        </div>
      </StyledWrapper>
    </>
  );
};

const StyledWrapper = styled.div`
  padding: 10vh 0;
`;

export const getStaticProps = async () => {
  const writingMeta: WritingBlockProps[] = await getwritingsmeta();

  return {
    props: {
      posts: writingMeta,
    },
  };
};

export default WritingPage;
