import { createContext, FC, useState, useContext, useMemo, useCallback } from 'react';

type BLOCK_TYPE = 'header' | 'work-experience';

type Block = {
  id: string;
  type: BLOCK_TYPE;
  content: any; // define later
};

const headerBlock: Block = {
  type: 'header',
  id: `header-${String(new Date().getTime() / 1000)}`,
  content: {
    name: {
      formType: 'string',
      formValue: 'Jon Dang',
    },

    phone: {
      formType: 'string',
      formValue: '571.225.5960',
    },
    email: {
      formType: 'string',
      formValue: 'jondang@gmail.com',
    },

    location: {
      formType: 'string',
      formValue: 'San Francisco, CA',
    },
  },
};

type ResumeBuilderContextProps = {
  blocks: Block[];
  selectedBlock?: Block | null;
  selectBlock: (blockId: string) => void;
  removeSelectedBlock: () => void;
};

const ResumeBuilderContext = createContext<ResumeBuilderContextProps>({
  blocks: [],
  selectBlock: () => {},
  removeSelectedBlock: () => {},
});

export const ResumeBuilderProvider: FC = ({ children }) => {
  const [blocks, setBlocks] = useState<Block[] | []>([headerBlock]);

  const [selectedBlock, setSelectBlock] = useState<Block | null>(null);

  const selectBlock = useCallback(
    (blockId: string) => {
      const block = blocks.filter((block: Block) => block.id === blockId)?.[0];
      setSelectBlock(block);
    },
    [blocks],
  );

  const values = useMemo(() => {
    return {
      blocks,
      selectedBlock,
      selectBlock,

      removeSelectedBlock: () => setSelectBlock(null),
    };
  }, [blocks, selectBlock, selectedBlock]);

  return <ResumeBuilderContext.Provider value={values}>{children}</ResumeBuilderContext.Provider>;
};

export const useResumeBuilder = () => {
  return useContext(ResumeBuilderContext);
};
