import { FC } from 'react';
import styled from 'styled-components';
import { sand, sandDark, crimson } from '@radix-ui/colors';
import Link from 'next/link';

export interface WritingBlockProps {
  title: string;
  summary: string;
  date: string | Date;
  slug: string;
}

export const WritingBlock: FC<WritingBlockProps> = ({ slug, title, summary, date }) => {
  return (
    <Link href={`/writing/${slug}`} passHref>
      <Block>
        <h4>{title}</h4>
        <p>{summary}</p>
        <p className="date">{date}</p>
      </Block>
    </Link>
  );
};

const Block = styled.div`
  margin-bottom: 25px;
  cursor: pointer;
  transition: all 333ms;
  border: 1px solid transparent;
  border-radius: 10px;
  position: relative;

  :hover {
    h4 {
      background: linear-gradient(90deg, rgb(255, 154, 158) 0%, rgb(254, 207, 239) 99%, rgb(254, 207, 239) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  h4 {
    margin: 0;
    transition: all 0.3s;
  }

  p {
    color: ${sand.sand9};
    font-size: 17px;
    margin-top: 10px;
  }

  .date {
    color: ${sand.sand9};
    font-size: 14px;
  }
`;
