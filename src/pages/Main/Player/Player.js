import React, { useState, useRef } from 'react';
import './Player.scss';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import { ReactComponent as PlayIcon } from '../../../assets/images/play.svg';
import { ReactComponent as PauseIcon } from '../../../assets/images/pause.svg';

const Player = ({ videoFile }) => {
  const video = useRef(null);
  const seekBar = useRef(null);
  const controllers = useRef(null);
  const [videoPlay, setVideoPlay] = useState(null);
  const [progressBar, setProgressBar] = useState(0);
  const handle = useFullScreenHandle();

  const playPause = () => {
    if (!videoPlay || video.current?.paused) {
      setVideoPlay(video.current.play());
    } else {
      setVideoPlay(video.current.pause());
    }
  };

  let timeout;
  document.addEventListener('mousemove', () => {
    controllers.current?.classList.add('active');
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      controllers.current?.classList.remove('active');
    }, 2000);
  });

  return (
    <>
      <div className="video-name">Сборник мультфильмов. Учим виды транспорта для малышей Сборник мультфильмов.</div>
      <div className="video-player">
        <FullScreen handle={handle}>
          <video ref={video} loop onTimeUpdate={() => setProgressBar(video.current.currentTime)}>
            <source src={videoFile} type="video/mp4" />
          </video>
          <div className="controllers" ref={controllers}>
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
            <button className="fullscreenbtn" onClick={!handle.active ? handle.enter : handle.exit} />
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
        </FullScreen>
      </div>
    </>
  );
};

export default Player;
