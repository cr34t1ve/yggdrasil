import type { NextPage } from 'next';
import { PageLayout } from '@/components/index';

interface ProcreatePageProps {
  arts: [];
}

const ProcreatePage: NextPage<ProcreatePageProps> = () => {
  return (
    <PageLayout
      pageMetaProps={{
        title: 'Procreate Art -- Casprine Assempah',
        description: 'Exploring digital arts with Procreate on the M1 iPad. Potentially NFTs soon',
      }}
      pageHeaderProps={{
        title: 'Procreate Art',
        description: 'Exploring digital arts with Procreate on the M1 iPad. Potentially NFTs soon',
      }}
      showPageHeader
    >
      <p>procreate page</p>
    </PageLayout>
  );
};

export default ProcreatePage;
