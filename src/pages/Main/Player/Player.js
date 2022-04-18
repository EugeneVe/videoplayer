import React, { useState, useRef } from 'react';
import './Player.scss';
import { ReactComponent as PlayIcon } from '../../../assets/images/play.svg';
import { ReactComponent as PauseIcon } from '../../../assets/images/pause.svg';

const Player = ({ videoFile }) => {
  const video = useRef(null);
  const seekBar = useRef(null);
  const [videoPlay, setVideoPlay] = useState(null);
  const [progressBar, setProgressBar] = useState(0);

  const playPause = () => {
    if (!videoPlay || video.current?.paused) {
      setVideoPlay(video.current.play());
    } else {
      setVideoPlay(video.current.pause());
    }
  };

  return (
    <>
      <div className="video-name">Сборник мультфильмов. Учим виды транспорта для малышей Сборник мультфильмов.</div>
      <div className="video-player">
        <video ref={video} width="100%" height="100%" onTimeUpdate={() => setProgressBar(video.current.currentTime)}>
          <source src={videoFile} type="video/mp4" />
        </video>
        <div className="controllers">
          <button className="play-pause" onClick={() => playPause()}>
            {!videoPlay ? (
              <PlayIcon />
            ) : !videoPlay ? (
              <PauseIcon />
            ) : video.current?.paused ? (
              <PlayIcon />
            ) : (
              <PauseIcon />
            )}
          </button>
          <button className="fullscreen" onClick={() => setVideoPlay(video.current.requestFullscreen())} />
          <input
            type="range"
            ref={seekBar}
            className="seek-bar"
            value={progressBar}
            step="0.1"
            min="0"
            max={video.current?.duration}
            readOnly
          />
          <div className="shade-overlay" />
        </div>
      </div>
    </>
  );
};

export default Player;
