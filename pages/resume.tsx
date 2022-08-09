import type { NextPage } from 'next';
import { PageLayout, ResumeBlock } from '@/components/index';

interface ResumePageProps {}

const ResumePage: NextPage<ResumePageProps> = () => {
  return (
    <>
      <PageLayout
        showPageHeader
        pageMetaProps={{
          title: 'Resume - Casprine Assempah',
        }}
        pageHeaderProps={{
          title: 'Work',
          description: 'Long list of all my career stings, consider this a resume.',
        }}
      />

      <ResumeBlock />
    </>
  );
};

export default ResumePage;
