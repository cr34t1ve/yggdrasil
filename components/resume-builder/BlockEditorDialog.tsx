// @ts-nocheck

import { FC } from 'react';
import { Dialog } from '@headlessui/react';

import { HeaderBlockEditor } from './builder-forms/HeaderBlockEditor';

import { useResumeBuilder } from 'store/ResumeBuilderContext';

const editors = {
  header: HeaderBlockEditor,
};

interface BlockEditorDialogProps {
  show: boolean;
  closeModal: () => {};
}

export const BlockEditorDialog: FC<BlockEditorDialogProps> = ({ show, closeModal = () => {} }) => {
  const { selectedBlock } = useResumeBuilder();

  return (
    <>
      <Dialog onClose={closeModal} open={show}>
        <div
          style={{
            position: 'fixed',
            top: '0',
            right: '0',
            bottom: '0',
            left: '0',
            backgroundColor: 'rgba( #bfc2ca, 0.01)',
            backdropFilter: 'blur(0.5px)',
          }}
        />
        <div
          className="fixed inset-0 overflow-y-auto"
          style={{
            overflowY: 'auto',
            position: 'fixed',
            top: '0',
            right: '0',
            bottom: '0',
            left: '0',
          }}
        >
          <div
            style={{
              display: 'flex',
              padding: '1rem',
              textAlign: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '100%',
            }}
          >
            <Dialog.Panel
              style={{
                overflow: 'hidden',
                padding: '1.5rem',
                backgroundColor: '#ffffff',
                transitionProperty: 'all',
                textAlign: 'left',
                verticalAlign: 'middle',
                width: '100%',
                maxWidth: '28rem',
                borderRadius: '1rem',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              }}
            >
              {editors?.[selectedBlock?.type]}
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </>
  );
};
