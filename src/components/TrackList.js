import React from 'react';
import useMusicPlayer from '../hooks/useMusicPlayer';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

const TrackList = () => {
  const { trackList, currentTrackName, playTrack, isPlaying } =
    useMusicPlayer();

  return (
    <div className="track-item_container">
      {trackList.map((track, index) => (
        <div
          key={index}
          className="track-item"
          onClick={() => playTrack(index)}
        >
          <button onClick={() => playTrack(index)} className="play-pause-btn">
            {isPlaying && currentTrackName === track.name ? (
              <PauseIcon />
            ) : (
              <PlayArrowIcon />
            )}
          </button>
          <div className="song-title">{track.name}</div>
        </div>
      ))}
    </div>
  );
};

export default TrackList;
