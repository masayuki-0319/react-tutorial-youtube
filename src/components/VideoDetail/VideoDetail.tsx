import { useContext } from 'react';
import Linkify from 'react-linkify';

import { Store } from '../../store/index';
import { VideoPlay } from '../VideoPlay/VideoPlay';
import Style from './VideoDetail.module.scss';

export const VideoDetail = () => {
  const { globalState } = useContext(Store);

  return (
    <div className={Style.wrap}>
      {globalState.selected !== null ? (
        <div>
          <VideoPlay id={globalState.selected.id.videoId} />
          <p>{globalState.selected.snippet.title}</p>
          <hr />
          <Linkify>
            <pre>{globalState.selected.snippet.description}</pre>
          </Linkify>
        </div>
      ) : (
        <p>No Data</p>
      )}
    </div>
  );
};
