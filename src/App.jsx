import React, { useState, useRef } from 'react';
import Player from './components/Player';
import SongDetail from './components/SongDetail';
import './styles/App.scss';
import data from './Data/data';
import LibraryList from './components/Library/LibraryList';
import Nav from './components/Nav';

function App() {
  const [songs, setSongs] = useState(data());

  const [currentSong, setCurrentSong] = useState(songs[0]);

  const [isPlay, setISPlay] = useState(false);

  const [time, setTime] = useState({
    currentTime: 0,
    duration: 0,
    timeRatio:0
  });

  const [libraryActive, setLibraryActive] = useState(false);

  const audioRef = useRef(null);

  const timeUpdateHamdler = (e) => {
    
    setTime({
      ...time,
      currentTime: e.target.currentTime,
      duration: e.target.duration,
      timeRatio:Math.round((time.currentTime / time.duration) *100)
    });
    // console.log('timeRatio:', time.timeRatio)
  };

  return (
    <div className="App">
      <Nav setLibraryActive={setLibraryActive} libraryActive={libraryActive} />
      <SongDetail currentSong={currentSong} />
      <Player
        time={time}
        setTime={setTime}
        audioRef={audioRef}
        currentSong={currentSong}
        isPlay={isPlay}
        setISPlay={setISPlay}
        setCurrentSong={setCurrentSong}
        songs={songs}
        setSongs={setSongs}
      />
      <LibraryList
        isPlay={isPlay}
        audioRef={audioRef}
        setISPlay={setISPlay}
        songs={songs}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
        libraryActive={libraryActive}
      />
      <audio
        onTimeUpdate={timeUpdateHamdler}
        ref={audioRef}
        src={currentSong.audio}
        onLoadedMetadata={timeUpdateHamdler}
        timeUpdateHamdler={timeUpdateHamdler}
      ></audio>
    </div>
  );
}

export default App;
