import type { NextPage } from 'next';
import styled from 'styled-components';
import { Navbar, PageHeader, ExperimentBlock, PageMeta } from '@/components/index';

// data
import { experiments, ExperimentType } from '@/lib/data';

interface ExperimentPageProps {}

const ExperimentPage: NextPage<ExperimentPageProps> = () => {
  return (
    <Wrapper className="container">
      <PageMeta
        title="Casprine's Experiments"
        description="Exploring weekend projects built with React, ReactNative, SwiftUI & more."
        url="https://casprine.com/experiments"
        logo="/images/experiment.jpg"
      />
      <Navbar />
      <PageHeader
        title="Weekend Experiments"
        description="Exploring weekend projects built with React, ReactNative, SwiftUI & more."
      />

      <div className="grid">
        {experiments.map((experiemnt: ExperimentType, index: number) => (
          <ExperimentBlock {...experiemnt} key={index} />
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
`;

export default ExperimentPage;
