import Style from './VideoGridItem.module.scss';
import { VFC } from 'react';
import { Link } from 'react-router-dom';
import { Video } from '../../types/Popular';

type Props = {
  video: Video;
};

export const VideoGridItem: VFC<Props> = ({ video }) => {
  const id = video.id;
  const src = video.snippet.thumbnails.standard.url;
  const title = video.snippet.title;

  return (
    <Link to={{ pathname: 'watch', search: `?v=${id}` }} className={Style.item}>
      <div>
        <img src={src} alt={title} />
        <span>{title}</span>
      </div>
    </Link>
  );
};
