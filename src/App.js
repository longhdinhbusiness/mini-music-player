import React from 'react';
import { MusicPlayerProvider } from './contexts/MusicPlayerContext';
import TrackList from './components/TrackList';
import Controller from './components/Controller';
import './App.css';

const App = () => {
  return (
    <MusicPlayerProvider>
      <div className="container">
        <div className="track_list">
          <TrackList />
        </div>
        <div className="controller">
          <Controller />
        </div>
      </div>
    </MusicPlayerProvider>
  );
};

export default App;
