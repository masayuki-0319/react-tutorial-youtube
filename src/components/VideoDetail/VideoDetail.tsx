import { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchSelectedData } from '../../apis/index';
import { Store } from '../../store/index';
import { Video } from '../../types/Popular';

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
      console.log('id', 'Warning: QueryParams is not find.');
      return;
    }
    await fetchSelectedData(id).then((res) => {
      const item = res.data.items.shift() as Video;
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
