import './Main.scss';
import ThumbVideo from './ThumbVideo/ThumbVideo';
import { ReactComponent as Animals } from '../../assets/foot.svg';
import { ReactComponent as Shapes } from '../../assets/star.svg';
import { ReactComponent as Colors } from '../../assets/colors.svg';

const Main = () => {
  return (
    <div className="main-page-wrapper">
      <div className="video-name">Сборник мультфильмов. Учим виды транспорта для малышей Сборник мультфильмов.</div>
      <div className="video-player">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/-uSZmiJnHfg"
          title="YouTube video player"
          frameBorder="0"
        ></iframe>
      </div>
      <div className="thumb-videos">
        <ThumbVideo
          image="https://i.ytimg.com/vi/z2K083Urolk/maxresdefault.jpg"
          icon={<Animals />}
          label="Laoreet sit felis porta potenti etiam massa. Scelerisque sed."
        />
        <ThumbVideo
          image="https://i.ytimg.com/vi/z2K083Urolk/maxresdefault.jpg"
          icon={<Shapes />}
          label="Laoreet sit felis porta potenti etiam massa. Scelerisque sed."
        />
        <ThumbVideo
          image="https://i.ytimg.com/vi/z2K083Urolk/maxresdefault.jpg"
          icon={<Colors />}
          label="Laoreet sit felis porta potenti etiam massa. Scelerisque sed."
        />
      </div>
    </div>
  );
};

export default Main;
