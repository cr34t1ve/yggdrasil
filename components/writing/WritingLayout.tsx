import { sand } from '@radix-ui/colors';
import { FC } from 'react';
import styled from 'styled-components';
import { Navbar, PageHeader, PageMeta } from '..';
import { WritingBlockProps } from './WritingBlock';
import { MDXProvider } from '@mdx-js/react';

interface WritingLayoutProps {
  meta: WritingBlockProps;
}

const Paragraph = styled.p`
  padding-bottom: 10px;
`;

const components = {
  p: Paragraph,
};

export const WritingLayout: FC<WritingLayoutProps> = ({ children, meta }) => {
  return (
    <>
      <MDXProvider components={components}>
        <Container className="container">
          <PageMeta title={meta.title} />
          <Navbar />
          <PageHeader {...meta} />
          <div className="content-container">{children}</div>
        </Container>
      </MDXProvider>
    </>
  );
};

const Container = styled.div`
  padding: 10vh 0;

  p {
    line-height: 30px;
    font-size: 17px;
    color: ${sand.sand6};
  }
`;
