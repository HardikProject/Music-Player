import React from 'react';
import LibrarySong from './LibrarySong';

function LibraryList({ songs }) {
  return (
    <div className='libraryList'>
      <h2 >Music Library</h2>
      <div className="libraryList__List">
        {songs.map((song) => (
          <LibrarySong song={song} key={song.id} />
        ))}
      </div>
    </div>
  );
}

export default LibraryList;
