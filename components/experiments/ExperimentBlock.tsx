import React, { FC } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { sand, blackA, sandDark } from '@radix-ui/colors';
import { motion } from 'framer-motion';
import sampleImage from '@/images/experiments/clubhouse-clone.png';

export interface ExperimentBlockProps {
  image?: string;
  name?: string;
  description?: string;
}

const variants = {
  beforeHover: { opacity: 0 },
  onHover: { opacity: 1 },
};

export const ExperimentBlock: FC<ExperimentBlockProps> = ({}) => {
  return (
    <Block initial="beforeHover" whileHover="onHover">
      <ImageBlock className="img-container">
        <Image
          className="experiment-cover-img"
          src={sampleImage}
          layout="fill"
          objectFit="contain"
          alt="text-block"
          placeholder="blur"
        />
      </ImageBlock>

      <motion.div variants={variants} layoutId="overlay" className="cover">
        <div className="content">
          <p className="name">Cash clone</p>
          <p className="description">A cash app clone built with SwiftUI</p>
        </div>
      </motion.div>
    </Block>
  );
};

const ImageBlock = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  border: 1px solid ${sandDark.sand5};
  border-radius: 10px;

  & > div {
    position: unset !important;
  }

  .experiment-cover-img {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
  }
`;

const Block = styled(motion.div)`
  width: 100%;
  aspect-ratio: 1/1;
  height: undefined;
  position: relative;
  cursor: pointer;

  .cover {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 10px;
    background-color: ${blackA.blackA12};
    display: flex;
    align-items: flex-end;

    .content {
      padding: 20px;
      width: 100%;

      .name {
        font-weight: 600;
        font-family: 'Playfair Display', serif;
      }

      .description {
        font-size: 15px;
        color: ${sand.sand5};
      }
    }
  }
`;
