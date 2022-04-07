import './ThumbVideo.scss';

const ThumbVideo = ({ image, icon, label }) => {
  return (
    <button className="thumb-video-wrapper">
      <div className="inside-thumb-img">
        <img src={image} alt="video thumb" />
      </div>
      <div className="description-wrapper">
        <div className="icon">{icon}</div>
        <div className="name">{label}</div>
      </div>
    </button>
  );
};

export default ThumbVideo;
