import React, { useState } from 'react';
import Player from './components/Player';
import SongDetail from './components/SongDetail';
import './styles/App.scss';
import data from './Data/data';
import LibraryList from './components/Library/LibraryList';

function App() {
  const [songs, setSongs] = useState(data());

  const [currentSong, setCurrentSong] = useState(songs[0]);

  const [isPlay, setISPlay] = useState(false);
  
  return (
    <div className="App">
      <SongDetail currentSong={currentSong} />
      <Player currentSong={currentSong} isPlay={isPlay} setISPlay={setISPlay} />
      <LibraryList songs={songs} />
    </div>
  );
}

export default App;
