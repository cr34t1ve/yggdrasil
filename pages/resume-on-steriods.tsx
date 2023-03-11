// @ts-nocheck

import styled from 'styled-components';
import { sand, grass } from '@radix-ui/colors';

import { ResumeBuilderProvider, useResumeBuilder } from 'store/ResumeBuilderContext';
import { BlockEditorDialog } from '../components';

function getValueFromBlock(block, name) {
  return block?.content[name]?.formValue || '';
}
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
  const { blocks, selectedBlock, selectBlock, removeSelectedBlock } = useResumeBuilder();

  const headerBlock = blocks.filter((block) => block.type === 'header')?.[0];

  return (
    <Layout>
      <BlockEditorDialog show={Boolean(selectedBlock)} closeModal={() => removeSelectedBlock()} />

      <div className="toolbar">
        <div className="logo">ResumeBuilder</div>
        <button className="resume-button">Save Configuration</button>
        <button className="resume-button">Save PDF</button>
      </div>

      <div className="editor">
        <Header headerBlock={headerBlock} selectBlock={selectBlock} />

        <section className="resume-summary">
          <div className="work-history">
            <div className="work-history__item block">
              <div className="company-details">
                <h3>Chipper Cash</h3>
                <div className="mini-divider" />
                <div className="roles">
                  <div className="role">
                    <p className="role__title">Deisgn lead</p>
                    <p className="role__tenure">Nov 2018 - Jan 2020</p>
                  </div>
                </div>
              </div>

              <div className="highlights">
                <p className="highlight">
                  Design system owner responsible for defining and maintaining design standards.
                </p>
                <p className="highlight">
                  Led team of 13 designers, researchers, and content designers, to ensure craft, consistency, and solid
                  user experiences across Mobile and Web. Created roadmaps, processes, and structure for the Design
                  team.
                </p>

                <p className="highlight">
                  Lead on the brand update project,working on market research, coordinating brand strategy, and
                  executing on design solutions to refresh and elevate brand identity.
                </p>
              </div>
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

  .block {
    transition: all 0.2s;

    &:hover {
      outline: 1.5px solid ${grass.grass8};
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
              &__title {
                /* font-family: 'BerkeleyMono'; */
                font-weight: 600;
                /* text-transform: uppercase; */
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

  * {
    /* outline: 1px dotted red; */
    font-family: 'CabinetGrotesk';
    color: ${sand.sand12};
  }
`;

export default ResumeContainer;
