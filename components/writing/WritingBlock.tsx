import { FC } from 'react';
import styled from 'styled-components';
import { sand } from '@radix-ui/colors';

export interface WritingBlockProps {
  title: string;
  summary: string;
  date: string | Date;
}

export const WritingBlock: FC<WritingBlockProps> = ({ title, summary, date }) => {
  return (
    <Block>
      <h4>{title}</h4>
      <p>{summary}</p>
      <p className="date">{date}</p>
    </Block>
  );
};

const Block = styled.div`
  margin-bottom: 25px;
  cursor: pointer;

  h4 {
    margin: 0;
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
