import { VFC } from 'react';
import Youtube from 'react-youtube';
import Style from './VideoPlay.module.scss'

type Props = {
  id: string;
};

export const VideoPlay: VFC<Props> = ({ id }) => {
  return (
    <div className={Style.wrap}>
      <Youtube videoId={id} className={Style.video} />
    </div>
  );
};
