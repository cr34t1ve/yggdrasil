import { FunctionComponent } from 'react';

interface ResumeBlockProps {
  position: string;
  companyName: string;
  stack: string[];
}

export const ResumeBlock: FunctionComponent<ResumeBlockProps> = ({ position, companyName, stack }) => {
  return <div>hello world</div>;
};
