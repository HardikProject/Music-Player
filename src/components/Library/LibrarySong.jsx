import React from 'react';
import './Library.scss';

function LibrarySong({
  song,
  setCurrentSong,
  songs,
  audioRef,
  isPlay,
  setSongs,
}) {
  const selectSongHandler = () => {
    const selectedSong = songs.filter(
      (singleSong) => singleSong.id === song.id, //this will return array
    );
    setCurrentSong(selectedSong[0]);
    if (isPlay) {
      const playPromise = audioRef.current.play();
      // console.log(typeof playPromise)
      if (playPromise !== undefined) {
        playPromise.then((audio) => audioRef.current.play());
      }
    }
    const newSongs = songs.map(singleSong =>{
      if (singleSong.id===selectedSong[0].id) {
        return{
          ...singleSong,active:true
        }
      }else{
        return{
          ...singleSong,active:false
        }
      }
    })
    setSongs(newSongs)
    console.log('newSongs:', newSongs)
  };

  return (
    <div
      onClick={selectSongHandler}
      className={`librarySong ${song.active ? `selected` : null}`}
    >
      <img src={song.cover} alt={song.name} />
      <div className="librarySong__detail">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
}

export default LibrarySong;
