import React, { FC } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { sand, blackA, sandDark } from '@radix-ui/colors';
import { ExperimentType } from '@/lib/data';
import { MagicLink } from '..';

const variants = {
  beforeHover: { opacity: 0 },
  onHover: { opacity: 1 },
};

export const ExperimentBlock: FC<ExperimentType> = ({ name, description, image, url }) => {
  return (
    <>
      <Block initial="beforeHover" whileHover="onHover" href={url} target="_blank" rel="noreferrer">
        <ImageBlock className="img-container">
          <Image
            className="experiment-cover-img"
            src={image}
            layout="fill"
            alt="text-block"
            placeholder="blur"
            objectFit="cover"
          />
        </ImageBlock>

        <motion.div variants={variants} layoutId="overlay" className="cover">
          <div className="content">
            <p className="name">{name}</p>
            <p className="description">{description}</p>
          </div>
        </motion.div>

        <div className="content mobile">
          <MagicLink url={url} classname="name" text={name} />
          <p className="description">{description}</p>
        </div>
      </Block>
    </>
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

const Block = styled(motion.a)`
  width: 100%;
  aspect-ratio: 1/1;
  height: undefined;
  position: relative;
  cursor: pointer;

  .mobile {
    display: none;

    @media (max-width: 720px) {
      display: flex;
      flex-direction: column;
    }
  }

  .content {
    padding: 20px;
    width: 100%;

    @media (max-width: 720px) {
      padding: 10px 0;
    }

    .name {
      font-weight: 600;
      font-family: 'PTSerif', serif;

      @media (max-width: 720px) {
        font-weight: normal;
        font-size: 15px;
        color: white;
        font-family: 'Whitney', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
          Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      }
    }

    .description {
      font-size: 15px;
      color: ${sand.sand5};

      @media (max-width: 720px) {
        color: ${sand.sand9};
        font-size: 14px;
      }
    }
  }

  .cover {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 10px;
    background-color: ${blackA.blackA11};
    display: flex;
    align-items: flex-end;
  }
`;
