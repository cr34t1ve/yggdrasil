import { NextPage } from 'next';
import { PageLayout } from '@/components/index';
import useSWR from 'swr';
import { fetcher } from '@/lib/fetcher';
import styled from 'styled-components';
import { sand, sandDark } from '@radix-ui/colors';

interface MusicPage {}

interface TopTracks {
  tracks: any[];
}

export async function getServerSideProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}

const Music: NextPage<MusicPage> = () => {
  const { data, error } = useSWR<TopTracks>('/api/top-tracks', fetcher);

  console.log('error', error);

  // console.log('==>data<==', data);

  return (
    <>
      <PageLayout
        showPageHeader
        pageMetaProps={{
          title: 'Top tracks',
        }}
        pageHeaderProps={{
          title: 'Jamming',
          description: "Curious what I'm currently jamming to? Here's my top tracks on Spotify updated daily.",
        }}
      >
        <Wrapper>
          {data && (
            <>
              {data?.tracks?.map((track: any, index: number) => {
                return (
                  <div className="track" key={index}>
                    <div className="details">
                      <p className="name">
                        {track.title} {track.songType === 'ALBUM' && `- ${track.albumName}`}
                      </p>
                      <p className="artist"> {track.artistName}</p>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </Wrapper>
      </PageLayout>
    </>
  );
};

const Wrapper = styled.div`
  .track {
    /* margin-bottom: 10px; */
    border-top: 1px solid ${sandDark.sand7};
    border-bottom: 1px solid ${sandDark.sand7};
    padding: 10px 0;
    margin-bottom: -1px;
    counter-increment: list 1;
    position: relative;
    cursor: pointer;

    ::before {
      content: counter(list, decimal-leading-zero);
      font-feature-settings: 'tnum', 'salt', 'zero';
      position: absolute;
      top: 15px;
      margin-left: -30px;
      top: auto;
      color: ${sand.sand11};
      font-weight: 500;
    }
  }

  .name {
    color: ${sand.sand6};
  }
`;

export default Music;

// content: counter(flow-list,decimal-leading-zero);
//     font-family: var(--font-display);
//     font-weight: 500;
//     font-feature-settings: "tnum","salt","zero";
//     color: var(--mono8);
//     font-size: var(--text-sm);
//     position: absolute;
//     top: 16px;

// border-top: 1px solid var(--mono5);
// border-bottom: 1px solid var(--mono5);
// counter-increment: flow-list -1;
// display: flex;
// align-items: center;
// position: relative;
// transition: var(--transition-long);
// transition-property: opacity;
// will-change: opacity;
