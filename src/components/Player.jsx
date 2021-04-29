import React, { useEffect } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import { IoMdArrowRoundForward, IoMdArrowRoundBack } from 'react-icons/io';
import '../styles/Player.scss';
import { playAudio } from '../feature';

function Player({
  isPlay,
  setISPlay,
  audioRef,
  time,
  setTime,
  songs,
  currentSong,
  setCurrentSong,
  setSongs,
}) {
  useEffect(() => {
    const newSongs = songs.map((singleSong) => {
      if (singleSong.id === currentSong.id) {
        return {
          ...singleSong,
          active: true,
        };
      } else {
        return {
          ...singleSong,
          active: false,
        };
      }
    });
    setSongs(newSongs);
  }, [currentSong]);

  const playAudioHandler = () => {
    if (isPlay) {
      audioRef.current.pause();
      setISPlay(!isPlay);
    } else {
      audioRef.current.play();
      setISPlay(!isPlay);
    }
    console.log(audioRef.current);
  };

  const formateTime = (timeInSecond) => {
    let minutes = Math.floor(timeInSecond / 60);
    let second = '0' + (Math.floor(timeInSecond) - minutes * 60);
    return minutes + ':' + second.slice(-2);
  };

  const dragInputHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setTime({ ...time, currentTime: e.target.value });
  };

  const setSongHandler = (direction) => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === 'forward') {
      setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    } else {
      if (currentIndex === 0) {
        setCurrentSong(songs[songs.length - 1]);
        playAudio(audioRef, isPlay);
        return;
      }
      setCurrentSong(songs[(currentIndex - 1) % songs.length]);
    }
    playAudio(audioRef, isPlay);
  };

  const timeStyle = { transform: `translateX(${time.timeRatio}%)` };
  // console.log('timeStyle:', timeStyle)
  // console.log('time.timeRatio:', time.timeRatio)

  return (
    <div className="player__container ">
      <div className="player__timer ">
        <p>{formateTime(time.currentTime)}</p>
        <div style={{background:`linear-gradient(to-right,#cc02cc, #00fa9a)`}} className="track">
          <input
            type="range"
            min={0}
            max={time.duration || 0}
            value={time.currentTime}
            onChange={dragInputHandler}
          />
          <div style={timeStyle} className="animated-track"></div>
        </div>
        <p>{time.duration ? formateTime(time.duration) : 'Loading'}</p>
      </div>

      <div className="player__icon ">
        <IoMdArrowRoundBack
          size="1.5em"
          onClick={() => setSongHandler('Backward')}
        />
        {isPlay ? (
          <FaPause size="1.5em" onClick={playAudioHandler} />
        ) : (
          <FaPlay size="1.5em" onClick={playAudioHandler} />
        )}

        <IoMdArrowRoundForward
          size="1.5em"
          onClick={() => setSongHandler('forward')}
        />
      </div>
    </div>
  );
}

export default Player;
