import useSWR from 'swr';
import { fetcher } from '@/lib/fetcher';
import styled from 'styled-components';

interface NowPlaying {
  isPlaying: boolean;
  albumName: string;
  title: string;
  artist: string;
  songType: 'album' | 'single ';
}

export const NowPlaying = () => {
  const { data } = useSWR<NowPlaying>('/api/now-playing', fetcher);

  console.log({ data });

  return (
    <Wrapper>
      {data && (
        <>
          {data.isPlaying ? (
            <div className="playing">
              <div className="animated-synthesizer"></div>
              <div className="details">
                <p className="name">
                  {data.title} {data?.songType === 'album' && `- ${data?.albumName}`}
                </p>
                <p className="artist">{data.artist ?? 'Spotify'}</p>
              </div>
            </div>
          ) : (
            <div className="not-playing">
              <p>Not Playing</p>
            </div>
          )}
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  outline: 1px dotted red;
`;

/**
 * cases to handle
 * when playing
 * - single
 * - album
 * when not playing
 */
