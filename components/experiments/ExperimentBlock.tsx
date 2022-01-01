import React, { FC } from 'react';

interface ExperimentBlockProps {
  image: string;
  name: string;
}

export const ExperimentBlock: FC<ExperimentBlockProps> = ({}) => {
  return (
    <div>
      <p>image</p>
      <p>name</p>
    </div>
  );
};
