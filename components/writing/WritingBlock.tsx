import { FC } from 'react';
import styled from 'styled-components';
import { sand, crimson } from '@radix-ui/colors';
import Link from 'next/link';

export interface WritingBlockProps {
  title: string;
  summary: string;
  date: string | Date;
  slug: string;
  published: boolean;
}

export const WritingBlock: FC<WritingBlockProps> = ({ slug, title, summary, date, published }) => {
  const enviroment: 'development' | 'production' | 'test' = process.env.NODE_ENV;

  return (
    <Link href={`/writing/${slug}`} passHref>
      <Block>
        <h4>{title}</h4>
        <p>{summary}</p>
        <div className="flex">
          <p className="date">{date}</p>
          {enviroment === 'development' && !published && <p className="draft">Draft</p>}
        </div>
      </Block>
    </Link>
  );
};

const Block = styled.div`
  margin-bottom: 25px;
  cursor: pointer;
  transition: all 333ms;
  border: 1px solid transparent;
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
    font-weight: normal;
  }

  p {
    color: ${sand.sand9};
    font-size: 17px;
    margin-top: 10px;
  }

  .flex {
    display: flex;
    .date,
    .draft {
      color: ${sand.sand9};
      font-size: 14px;
    }
    .date,
    .draft {
      color: ${sand.sand9};
      font-size: 14px;
    }

    .draft {
      margin-left: 20px;
      color: ${crimson.crimson10};
    }
  }
`;
