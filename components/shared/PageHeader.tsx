import { FC } from 'react';
import styled from 'styled-components';
import { WritingBlockProps } from '@/components/index';
import { sand, sandDark } from '@radix-ui/colors';

interface PageHeaderProps extends Partial<WritingBlockProps> {
  description?: string;
}

export const PageHeader: FC<PageHeaderProps> = ({ description, title, date }) => {
  return (
    <StylePageHeader>
      <h2>{title}</h2>
      {description && <p className="summary">{description}</p>}
      {date && <p className="date">{date}</p>}

      <div className="dividers">
        <div className="divider" />
        <div className="divider" />
      </div>
    </StylePageHeader>
  );
};

const StylePageHeader = styled.div`
  padding: 40px 0;

  .summary {
    margin: 10px 0;
    color: ${sand.sand9};
    font-size: 16px;
    font-weight: 500;
  }

  h2 {
    font-weight: 600;
    color: ${sand.sand4};
    font-size: 25px;
    cursor: pointer;
    margin: 0 auto;
  }

  .date {
    margin: 10px 0;
    font-size: 15px;
    font-weight: 500;
  }

  .dividers {
    padding-top: 20px;
    .divider {
      height: 1px;
      width: 100%;
      background-color: ${sandDark.sand7};
      margin-bottom: 2px;
    }
  }
`;
