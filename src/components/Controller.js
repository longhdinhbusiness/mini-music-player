import React from 'react';
import { IconButton, Box } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import useMusicPlayer from '../hooks/useMusicPlayer';

const Controller = () => {
  const { isPlaying, togglePlay, playNextTrack, playPreviousTrack } =
    useMusicPlayer();

  return (
    <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
      <IconButton onClick={playPreviousTrack} aria-label="Previous">
        <SkipPreviousIcon />
      </IconButton>

      <IconButton
        onClick={togglePlay}
        aria-label={isPlaying ? 'Pause' : 'Play'}
      >
        {isPlaying ? (
          <PauseIcon
            sx={{
              fontSize: 50,
              backgroundColor: 'rgba(159, 143, 156, 0.7)',
              borderRadius: 10,
            }}
          />
        ) : (
          <PlayArrowIcon
            sx={{
              fontSize: 50,
              backgroundColor: 'rgba(159, 143, 156, 0.7)',
              borderRadius: 10,
            }}
          />
        )}
      </IconButton>

      <IconButton onClick={playNextTrack} aria-label="Next">
        <SkipNextIcon />
      </IconButton>
    </Box>
  );
};

export default Controller;
