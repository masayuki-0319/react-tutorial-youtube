import { VFC, useContext, useEffect } from 'react';
import { Layout } from '../components/Layout/Layout';
import { VideoDetail } from '../components/VideoDetail/VideoDetail';
import { SideList } from '../components/SideList/SideList';
import { Store } from '../store/index';
import { useLocation } from 'react-router-dom';
import { fetchSelectedData, fetchRelatedData } from '../apis/index';
import { Video } from '../types/Popular';

export const Watch: VFC = () => {
  const { setGlobalState } = useContext(Store);
  const location = useLocation();

  const setVideos = async () => {
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('v');

    if (id) {
      const [selected, related] = await Promise.all([
        fetchRelatedData(id),
        fetchSelectedData(id),
      ]);

      setGlobalState({
        type: 'SET_SELECTED',
        payload: { selected: selected.data.items.shift() as Video },
      });
      setGlobalState({
        type: 'SET_RELATED',
        payload: { related: related.data.items as Video[] },
      });
    }
  };

  useEffect(() => {
    setVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);

  return (
    <Layout>
      <VideoDetail />
      <SideList />
    </Layout>
  );
};
