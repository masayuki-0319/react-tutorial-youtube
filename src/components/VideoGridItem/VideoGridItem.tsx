import Style from './VideoGridItem.module.scss';
import { VFC } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  id: string;
  src: string;
  title: string;
};

export const VideoGridItem: VFC<Props> = ({ id, src, title }) => {
  return (
    <Link to={{ pathname: 'watch', search: `?v=${id}` }} className={Style.item}>
      <div>
        <img src={src} alt={title} />
        <span>{title}</span>
      </div>
    </Link>
  );
};
