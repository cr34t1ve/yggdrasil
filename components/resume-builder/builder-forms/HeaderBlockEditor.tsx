import { useResumeBuilder } from 'store/ResumeBuilderContext';
import { TextInput } from '@/components/forms';
import styled from 'styled-components';
import { sand } from '@radix-ui/colors';

function transformLabel(label: string) {
  return `${label.charAt(0).toUpperCase()}${label.slice(1).toLowerCase()}`;
}

export const HeaderBlockEditor = () => {
  const { headerBlock } = useResumeBuilder();

  const fieldNames = Object.keys(headerBlock?.content);

  return (
    <HeaderBlockEditorLayout>
      <h4>Header</h4>

      <div className="form-control">
        {fieldNames.map((field) => {
          const formField = headerBlock?.content[field];
          return (
            <TextInput
              name={field}
              key={field}
              value={formField.formValue}
              label={transformLabel(field)}
              onChange={() => {}}
            />
          );
        })}
      </div>

      <button className="resume-button medium">Save</button>
    </HeaderBlockEditorLayout>
  );
};

const HeaderBlockEditorLayout = styled.div`
  h4 {
    color: ${sand.sand12};
    font-family: 'CabinetGrotesk';
  }

  .form-control {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    .textinput-container {
      margin-bottom: 20px;
    }
  }

  button {
    width: 100%;
  }
`;
