import { PageLayout, ResumeBlock, ResumeBlockType } from '@/components/index';

const resumeContent: ResumeBlockType[] = [
  {
    startDate: '2021',
    endDate: '2022',
    roles: [
      {
        title: 'Senior Software Engineer',
        company: 'Okra',
        location: 'Nigeria, Remote',
        employmentType: 'FULLTIME',
        description: 'Helped maintain web platform and new MVP mobile application with React and ReactNative',
      },
    ],
  },

  {
    startDate: '2021',
    endDate: '2022',
    roles: [
      {
        title: 'Design Systems Lead',
        company: 'ChipperCash',
        location: 'San Francisco, Remote',
        employmentType: 'FULLTIME',
        description: 'Helped maintain web platform and new MVP mobile application with React and ReactNative',
      },
    ],
  },

  {
    startDate: '2020',
    endDate: '2022',
    roles: [
      {
        title: 'Co-Founder',
        company: 'Brank',
        location: 'Deleware, Remote',
        employmentType: 'FULLTIME',
        description: 'Helped maintain web platform and new MVP mobile application with React and ReactNative',
      },
    ],
  },

  {
    startDate: '2019',
    endDate: '2021',
    roles: [
      {
        title: 'Software Engineer',
        company: 'Simple Dealer',
        location: 'London, Remote',
        employmentType: 'FULLTIME',
        description: 'Helped maintain web platform and new MVP mobile application with React and ReactNative',
      },
    ],
  },

  {
    startDate: '2019',
    endDate: '2020',
    roles: [
      {
        title: 'Software Engineer',
        company: 'expressPay Ghana Limited',
        location: 'Ghana, Remote',
        employmentType: 'FULLTIME',
        description: 'Helped maintain web platform and new MVP mobile application with React and ReactNative',
      },
    ],
  },

  {
    startDate: '2020',
    endDate: '2020',
    roles: [
      {
        title: 'Lead Mobile Engineer',
        company: 'Wine2u',
        location: 'Ghana, Remote',
        employmentType: 'CONTRACT',
        description: 'A wine shopping app',
      },
    ],
  },

  {
    startDate: '2019',
    endDate: '2020',
    roles: [
      {
        title: 'Lead Mobile Engineer',
        company: 'EchoApp',
        location: 'Ghana, Remote',
        employmentType: 'CONTRACT',
        description: 'User Feedback Tablet App for TotalEnergies Ghana',
      },
    ],
  },

  {
    startDate: '2019',
    endDate: '2020',
    roles: [
      {
        title: 'Lead Web Engineer',
        company: 'Digiduka',
        location: 'Ghana, Remote',
        employmentType: 'CONTRACT',
        description: 'digital & financial services for SME in africa ',
      },
    ],
  },

  {
    startDate: '2019',
    endDate: '2019',
    roles: [
      {
        title: 'Frontend Engineer',
        company: 'Intelligent Crazy People',
        location: 'London, Remote',
        employmentType: 'FULLTIME',
        description: 'Helped maintain web platform and new MVP mobile application with React and ReactNative',
      },
    ],
  },
  {
    startDate: '2017',
    endDate: '2018',

    roles: [
      {
        title: 'Frontend Engineer',
        company: 'OMG Digital',
        location: 'Ghana',
        description: 'Helped maintain web platform and new MVP mobile application with React and ReactNative',
        employmentType: 'FULLTIME',
      },
    ],
  },
];

const ResumePage = () => {
  return (
    <>
      <PageLayout
        showPageHeader
        pageMetaProps={{
          title: 'Resume - Casprine Assempah',
        }}
        pageHeaderProps={{
          title: 'Work',
          description: 'Long list of all my career stings, consider this a resume.',
        }}
      >
        {resumeContent.map((r, i) => {
          return <ResumeBlock key={i} {...r} />;
        })}
      </PageLayout>
    </>
  );
};

export default ResumePage;
