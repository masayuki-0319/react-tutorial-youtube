import { VFC } from 'react';
import { Video } from '../../types/Popular';
import { Link } from 'react-router-dom';
import Style from './SideListItem.module.scss';

type Props = {
  video: Video;
};

export const SideListItem: VFC<Props> = ({ video }) => {
  console.log(video.id.videoId);

  return (
    <Link
      to={{ pathname: 'watch', search: `?v=${video.id.videoId}` }}
      className={Style.item}
    >
      <img
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className={Style.info}>
        <span>{video.snippet.title}</span>
      </div>
    </Link>
  );
};
