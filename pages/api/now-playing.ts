import type { NextApiRequest, NextApiResponse } from 'next';
import { getNowPlaying } from '@/lib/spotify';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const response = await getNowPlaying();

  console.log({ response });

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ isPlaying: false });
  }

  const song = await response.json();

  if (song.item === null) {
    return res.status(200).json({ isPlaying: false });
  }

  const isPlaying = song.is_playing;
  const title = song.item.name;
  const artist = song.item.artists.map((_artist: any) => _artist.name).join(', ');
  const albumName = song.item.album.name;
  const songUrl = song.item.external_urls.spotify;
  const songType = song.item.album.album_type;

  res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=30');

  return res.status(200).json({
    albumName,
    artist,
    isPlaying,
    songUrl,
    title,
    song,
    songType,
  });
}
