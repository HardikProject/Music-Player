import React from 'react';
import LibrarySong from './LibrarySong';
import './Library.scss';

function LibraryList({ songs, setCurrentSong, audioRef, isPlay,setSongs ,libraryActive}) {
  return (
    <div className={`libraryList ${libraryActive?'activeLibrary':null}`}>
      <h2>Music Library</h2>
      <div className="libraryList__List">
        {songs.map((song) => (
          <LibrarySong
            isPlay={isPlay}
            song={song}
            key={song.id}
            setCurrentSong={setCurrentSong}
            songs={songs}
            audioRef={audioRef}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
}

export default LibraryList;
