import './Main.scss';
import Player from './Player/Player';
import ThumbVideo from './ThumbVideo/ThumbVideo';
import { ReactComponent as AnimalsIcon } from '../../assets/images/foot.svg';
import { ReactComponent as ShapesIcon } from '../../assets/images/star.svg';
import { ReactComponent as ColorsIcon } from '../../assets/images/colors.svg';
import videoFile from '../../assets/video/sample-5s.mp4';

const Main = () => {
  return (
    <div className="main-page-wrapper">
      <Player videoFile={videoFile} />
      <div className="thumb-videos">
        <ThumbVideo
          image="https://i.ytimg.com/vi/z2K083Urolk/maxresdefault.jpg"
          icon={<AnimalsIcon />}
          label="Laoreet sit felis porta potenti etiam massa. Scelerisque sed."
        />
        <ThumbVideo
          image="https://i.ytimg.com/vi/z2K083Urolk/maxresdefault.jpg"
          icon={<ShapesIcon />}
          label="Laoreet sit felis porta potenti etiam massa. Scelerisque sed."
        />
        <ThumbVideo
          image="https://i.ytimg.com/vi/z2K083Urolk/maxresdefault.jpg"
          icon={<ColorsIcon />}
          label="Laoreet sit felis porta potenti etiam massa. Scelerisque sed."
        />
      </div>
    </div>
  );
};

export default Main;
