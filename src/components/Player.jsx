import React, { useRef, useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import { IoMdArrowRoundForward, IoMdArrowRoundBack } from 'react-icons/io';

function Player({ currentSong, isPlay, setISPlay }) {
  const [time, setTime] = useState({
    currentTime: 0,
    duration: 0,
  });

  const audioRef = useRef(null);

  const playAudioHandler = () => {
    if (isPlay) {
      audioRef.current.pause();
      setISPlay(!isPlay);
    } else {
      audioRef.current.play();
      setISPlay(!isPlay);
    }
  };

  const timeUpdateHamdler = (e) => {
    setTime({
      ...time,
      currentTime: e.target.currentTime,
      duration: e.target.duration,
    });
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

  return (
    <div className="player__container ">
      <div className="player__timer ">
        <p>{formateTime(time.currentTime)}</p>
        <input
          type="range"
          min={0}
          max={time.duration}
          value={time.currentTime}
          onChange={dragInputHandler}
        />
        <p>{formateTime(time.duration)}</p>
      </div>

      <div className="player__icon ">
        <IoMdArrowRoundBack size="1.5em" />
        {isPlay ? (
          <FaPause size="1.5em" onClick={playAudioHandler} />
        ) : (
          <FaPlay size="1.5em" onClick={playAudioHandler} />
        )}

        <IoMdArrowRoundForward size="1.5em" />
      </div>

      <audio
        onTimeUpdate={timeUpdateHamdler}
        ref={audioRef}
        src={currentSong.audio}
        onLoadedMetadata={timeUpdateHamdler}
      ></audio>
    </div>
  );
}

export default Player;
