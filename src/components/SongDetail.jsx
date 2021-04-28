import React from 'react';
import '../styles/SongDetail.scss'

function SongDetail({ currentSong }) {
  return (
    <div className="song__container ">
      <img alt={currentSong.name} src={currentSong.cover} />
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
}

export default SongDetail;
