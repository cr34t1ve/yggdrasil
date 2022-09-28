import { sand } from '@radix-ui/colors';
import { FunctionComponent } from 'react';
import styled from 'styled-components';

type EmploymentType = 'PARTTIME' | 'FULLTIME' | 'CONTRACT';

const employmentMapping: Record<EmploymentType, string> = {
  FULLTIME: 'Full-time',
  PARTTIME: 'Part-time',
  CONTRACT: 'Contract',
};

interface RoleBlock {
  title: string;
  company: string;
  description: string;
  location: string;
  employmentType: EmploymentType;
}

export interface ResumeBlockType {
  startDate: string;
  endDate?: string;
  roles: RoleBlock[];
}

export const ResumeBlock: FunctionComponent<ResumeBlockType> = ({ startDate, endDate, roles }) => {
  return (
    <StyledResumeBlock>
      <div className="tenure">
        <p>
          {startDate} {endDate && `→ ${endDate}`}
        </p>
      </div>

      <div className="roles">
        {roles.map((role: RoleBlock, index: number) => {
          return (
            <div className="role" key={index}>
              <p className="jobTitle">
                {role.title} at {role.company}
              </p>
              <div className="sub">
                <p className="location">{role.location}</p>
                <span>•</span>
                <p className="employmentType">{employmentMapping[role.employmentType]}</p>
              </div>
              <p className="description">{role.description}</p>
            </div>
          );
        })}
      </div>
    </StyledResumeBlock>
  );
};

const StyledResumeBlock = styled.section`
  // outline: 1px dotted red;

  // * {
  //   outline: 1px dotted red;
  // }

  display: flex;
  gap: 60px;
  margin-bottom: 20px;

  p {
    font-weight: 300;
  }

  .sub {
    display: flex;
    gap: 5px;
    align-items: center;
  }

  .tenure {
    flex-shrink: 0;
  }

  .jobTitle {
    color: ${sand.sand2};
  }

  em {
    color: ${sand.sand1};
  }

  .role {
    margin-bottom: 20px;
  }

  .roles {
    display: flex;
    flex-direction: column;
  }

  .description {
    font-size: 1rem;
    line-height: 1.4;
    margin-top: 0.8rem;
  }

  span {
    font-size: 1em;
    color: ${sand.sand9};
  }
`;
