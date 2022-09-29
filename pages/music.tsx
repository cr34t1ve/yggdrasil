import { NextPage } from 'next';
import { PageLayout, NowPlaying } from '@/components/index';
import useSWR from 'swr';
import { fetcher } from '@/lib/fetcher';
import styled from 'styled-components';
import { sand, sandDark } from '@radix-ui/colors';

interface MusicPage {}

interface TopTracks {
  tracks: any[];
}

const Music: NextPage<MusicPage> = () => {
  const { data } = useSWR<TopTracks>('/api/top-tracks', fetcher);

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
          <div className="now-playing-container">
            <NowPlaying />
          </div>

          {data?.tracks?.map((track: any, index: number) => {
            return (
              <Track showBorder={index !== data.tracks?.length - 1} key={index}>
                <div className="details">
                  <p className="name">
                    {track.title} {track.songType === 'ALBUM' && `- ${track.albumName}`}
                  </p>
                  <p className="artist"> {track.artistName}</p>
                </div>

                <div className="open">
                  <a href={track.songUrl} target="_blank" rel="noreferrer">
                    <svg width={15} height={15} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M3 2a1 1 0 00-1 1v9a1 1 0 001 1h9a1 1 0 001-1V8.5a.5.5 0 00-1 0V12H3V3h3.5a.5.5 0 000-1H3zm9.854.146a.5.5 0 01.146.351V5.5a.5.5 0 01-1 0V3.707L6.854 8.854a.5.5 0 11-.708-.708L11.293 3H9.5a.5.5 0 010-1h3a.499.499 0 01.354.146z"
                        fill={sandDark.sand11}
                        fillRule="evenodd"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </Track>
            );
          })}
        </Wrapper>
      </PageLayout>
    </>
  );
};

const Track = styled.div<{ showBorder: boolean }>`
  border-bottom: ${({ showBorder }) => (showBorder ? `1px solid ${sandDark.sand7}` : 'none')};
  padding: 10px 0;
  margin-bottom: -1px;
  counter-increment: list 1;
  position: relative;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-between;

  ::before {
    content: counter(list, decimal-leading-zero);
    font-feature-settings: 'tnum', 'salt', 'zero';
    position: absolute;
    font-size: 1rem;
    top: 15px;
    margin-left: -35px;
    top: auto;
    color: ${sand.sand11};
    font-weight: 600;
  }

  .name {
    color: ${sand.sand6};
  }
`;

const Wrapper = styled.div`
  /* outline: 1px solid red;

  * {
    outline: 1px dotted red;
  } */

  .now-playing-container {
    margin: 10px 0;
  }
`;

export default Music;
