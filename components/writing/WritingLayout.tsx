import { sand } from '@radix-ui/colors';
import { FC } from 'react';
import styled from 'styled-components';
import { Navbar, PageHeader, PageMeta } from '..';
import { WritingBlockProps } from './WritingBlock';

interface WritingLayoutProps {
  meta: WritingBlockProps;
}

export const WritingLayout: FC<WritingLayoutProps> = ({ children, meta }) => {
  return (
    <>
      <Container className="container">
        <PageMeta title={meta.title} />
        <Navbar />
        <PageHeader {...meta} />
        <div className="content-container">{children}</div>
      </Container>
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
