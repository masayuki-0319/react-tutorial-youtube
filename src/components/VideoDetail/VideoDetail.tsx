import { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchSelectedData } from '../../apis/index';
import { Store } from '../../store/index';
import { VideoResponse } from '../../types/youtube/VideoResponse';

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
  }, []);

  return <div></div>;
};
