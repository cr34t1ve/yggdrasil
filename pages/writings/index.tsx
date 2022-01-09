import type { NextPage } from 'next';
import { WritingBlockProps, WritingBlock, PageLayout } from '@/components/index';

import { getwritingsmeta } from '@/lib/index';

interface WritingProps {
  posts: WritingBlockProps[];
}

const WritingPage: NextPage<WritingProps> = ({ posts }) => {
  return (
    <>
      <PageLayout
        showPageHeader
        pageMetaProps={{
          title: 'Writing -- Casprine Assempah',
          description: 'Learnings from experiments',
        }}
        pageHeaderProps={{
          title: 'Writing',
          description: 'Learnings from experiments',
        }}
      >
        <div>
          <div className="writing-container">
            {posts.map((post: WritingBlockProps, index: number) => (
              <WritingBlock key={index} {...post} />
            ))}
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export const getStaticProps = async () => {
  const writingMeta: WritingBlockProps[] = await getwritingsmeta();

  return {
    props: {
      posts: writingMeta,
    },
  };
};

export default WritingPage;
