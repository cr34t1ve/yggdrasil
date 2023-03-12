// @ts-nocheck

import { useMemo, useRef } from 'react';
import styled from 'styled-components';
import { sand, grass } from '@radix-ui/colors';
import { useReactToPrint } from 'react-to-print';
import { format } from 'date-fns';

import { ResumeBuilderProvider, useResumeBuilder } from 'store/ResumeBuilderContext';
import { BlockEditorDialog } from '../components';
import Head from 'next/head';

function getValueFromBlock(block, name) {
  return block?.content[name]?.formValue || '';
}

function formatDate(dateString: string) {
  return format(new Date(dateString), 'LLL y');
}

const generateBlankExperience = () => {
  return {
    id: `work-${String(new Date().getTime() / 1000)}`,
    type: 'work-experience',
    content: {
      companyName: '',
      roles: [
        {
          title: '',
          startDate: '',
          endDate: '',
        },
      ],

      highlights: [''],
    },
  };
};

const ResumeContainer = () => {
  return (
    <ResumeBuilderProvider>
      <ResumeV2 />
    </ResumeBuilderProvider>
  );
};

const Header = ({ headerBlock, selectBlock }) => {
  return (
    <section className="header block" onClick={() => selectBlock(headerBlock.id)}>
      <h2>{getValueFromBlock(headerBlock, 'name')}</h2>
      <div className="divider" />
      <div className="header-info">
        <p className="header-info__item">{getValueFromBlock(headerBlock, 'name')}</p>
        <p className="header-info__item">{getValueFromBlock(headerBlock, 'phone')}</p>
        <p className="header-info__item">{getValueFromBlock(headerBlock, 'email')}</p>
        <p className="header-info__item">{getValueFromBlock(headerBlock, 'location')}</p>
      </div>
    </section>
  );
};

const ResumeV2 = () => {
  const containerRef = useRef();

  // function saveToPDF() {
  //   useReactToPrint({
  //     content: containerRef.current,
  //   });
  // }

  const saveToPDF = useReactToPrint({
    content: () => containerRef.current,
  });

  const { blocks, selectedBlock, selectBlock, removeSelectedBlock, selectBlockCopy } = useResumeBuilder();

  const headerBlock = blocks.filter((block) => block.type === 'header')?.[0];

  const workExperienceBlocks = useMemo(() => {
    return blocks.filter((block) => block.type === 'work-experience');
  }, [blocks]);

  function saveConfiguration() {
    console.log(JSON.stringify(blocks, null, 2));
  }
  return (
    <Layout ref={containerRef}>
      <Head>
        <title>Resume on steriods</title>
      </Head>
      <BlockEditorDialog show={Boolean(selectedBlock)} closeModal={() => removeSelectedBlock()} />

      <div className="toolbar">
        <div className="logo">ResumeBuilder</div>
        <button className="resume-button" onClick={saveConfiguration}>
          Save Configuration
        </button>
        <button className="resume-button" onClick={saveToPDF}>
          Save PDF
        </button>
      </div>

      <div className="editor">
        <Header headerBlock={headerBlock} selectBlock={selectBlock} />

        <section className="resume-summary">
          <div className="work-history">
            {workExperienceBlocks.map((block) => {
              const workBlock = block.content;

              return (
                <div className="work-history__item block" key={block.id} onClick={() => selectBlock(block.id)}>
                  <div className="company-details">
                    <h3>{workBlock.companyName}</h3>
                    <div className="mini-divider" />
                    <div className="roles">
                      {workBlock.roles.map((role, index) => {
                        return (
                          <div className="role" key={`${role}-${index}`}>
                            <p className="role__title">{role.title}</p>
                            <p className="role__tenure">
                              {formatDate(role.startDate)} - {formatDate(role.endDate)}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="highlights">
                    {workBlock.highlights.map((highlight) => {
                      return (
                        <p className="highlight" key={`${Math.random()}-${new Date().valueOf()}`}>
                          {highlight}
                        </p>
                      );
                    })}
                  </div>
                </div>
              );
            })}

            <div className="add-new-experience">
              <button className="resume-button medium" onClick={() => selectBlockCopy(generateBlankExperience())}>
                Add new experince
              </button>
            </div>
          </div>
          <div className="side-panel block">
            <p>side panel here </p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

const Layout = styled.main`
  height: 100vh;
  background-color: white;

  @media print {
    * {
      font-family: 'CabinetGrotesk' !important;
    }

    .toolbar {
      display: none !important;
    }

    .editor {
      padding: 20px !important;
    }

    .work-summary {
    }

    .work-history {
      grid-column: span 5 !important;
    }

    .side-panel {
      display: none !important;
    }

    .add-new-experience {
      display: none !important;
    }
  }

  .block {
    transition: all 0.2s;

    &:hover {
      outline: 1.5px solid ${grass.grass8};
      outline-offset: 2rem;
      cursor: pointer;
    }
  }

  .toolbar {
    display: flex;
    padding: 20px 15rem;
    border-bottom: 1px solid ${sand.sand5};

    .logo {
      margin-right: auto;
    }

    button {
      margin-left: 20px;
    }
  }

  .editor {
    padding: 10rem 15rem;
  }

  .header {
    transition: all 0.5s;

    h2 {
      font-size: 3.5rem;
      font-family: 'CabinetGrotesk';
      font-weight: 600;
    }

    .divider {
      width: 100%;
      height: 2px;
      background-color: ${sand.sand5};
    }

    &-info {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      margin-top: 40px;
      gap: 20px;

      &__item {
        font-family: 'CabinetGrotesk';
        font-weight: 600;
        /* text-transform: uppercase; */
      }
    }
  }

  .resume-summary {
    margin-top: 60px;
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(5, 1fr);

    .work-history {
      display: grid;
      grid-column: span 4;

      &__item {
        padding-top: 40px;
        display: grid;
        gap: 20px;
        grid-template-columns: repeat(4, 1fr);
        align-items: flex-start;

        border-bottom: 1px solid ${sand.sand5};

        .company-details {
          height: 100%;

          h3 {
            margin: 0;
            font-size: 30px;
          }

          .mini-divider {
            width: 18px;
            margin: 20px 0;
            display: flex;
            background-color: ${sand.sand9};
            height: 2px;
          }

          .roles {
            .role {
              margin-bottom: 20px;
              &__title {
                font-weight: 600;
              }

              &__tenure {
                margin-top: 5px;
                color: ${sand.sand11};
                font-size: 16px;
              }
            }
          }
        }

        .highlights {
          display: grid;
          grid-column: span 3;

          p.highlight {
            margin-bottom: 30px;
            display: flex;
            width: 80%;
            font-family: 'CabinetGrotesk';

            &:before {
              content: '→';
              margin-right: 10px;
              font-family: system-ui;
              display: block;
            }
          }
        }
      }
    }
  }

  .add-new-experience {
    margin-top: 40px;
  }

  * {
    font-family: 'CabinetGrotesk';
    color: ${sand.sand12};
  }
`;

export default ResumeContainer;
