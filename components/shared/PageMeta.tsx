import { FC } from 'react';
import Head from 'next/head';

interface PageMetaProps {
  title: string;
}

export const PageMeta: FC<PageMetaProps> = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};
