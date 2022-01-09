import { FC } from 'react';
import Head from 'next/head';

interface PageMetaProps {
  title: string;
  description?: string;
  logo?: string;
  url?: string;
}

export const PageMeta: FC<PageMetaProps> = ({ title, description, logo, url }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      <link rel="apple-touch-icon" href={logo} />
      <link rel="icon" href={logo} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={logo} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content={url} />
      <meta property="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={logo} />
    </Head>
  );
};
