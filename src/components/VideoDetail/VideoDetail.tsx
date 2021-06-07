import { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Linkify from 'react-linkify';

import { fetchSelectedData } from '../../apis/index';
import { Store } from '../../store/index';
import { VideoResponse } from '../../types/youtube/VideoResponse';
import { VideoPlay } from '../VideoPlay/VideoPlay';
import Style from './VideoDetail.module.scss';

type QueryParams = {
  search: string;
};

export const VideoDetail = () => {
  const { globalState, setGlobalState } = useContext(Store);

  const location = useLocation<QueryParams>();
  const setSelectedVideo = async () => {
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('v');
    if (id === null) {
      console.log('id', 'Warning: QueryParams is not found.');
      return;
    }

    await fetchSelectedData(id).then((res: VideoResponse) => {
      const item = res.data.items.shift();
      if (item === undefined) {
        console.log('items', 'Warning: Item is not found.');
        return;
      }

      setGlobalState({ type: 'SET_SELECTED', payload: { selected: item } });
      console.log('res', globalState);
    });
  };

  useEffect(() => {
    setSelectedVideo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);

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
