import { FC } from 'react';
import styled from 'styled-components';
import { WritingBlockProps } from '@/components/index';
import { sand, sandDark } from '@radix-ui/colors';

interface PageHeaderProps extends WritingBlockProps {}

export const PageHeader: FC<PageHeaderProps> = ({ title, date }) => {
  return (
    <StylePageHeader>
      <h2>{title}</h2>
      <p className="date">{date}</p>
      <div className="divider" />
      <div className="divider" />
    </StylePageHeader>
  );
};

const StylePageHeader = styled.div`
  padding: 40px 0;

  h2 {
    font-family: 'PTSerif';
    color: ${sand.sand4};
    font-size: 25px;
    font-weight: lighter;
    cursor: pointer;
    margin: 0 auto;
  }

  .date {
    margin: 10px 0;
    font-size: 15px;
  }

  .divider {
    height: 1px;
    width: 100%;
    background-color: ${sandDark.sand7};
    margin-bottom: 2px;
  }
`;
