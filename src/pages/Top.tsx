import { VFC, useContext, useEffect } from 'react';
import { fetchPupularData } from '../apis/index';
import { VideoResponse } from '../types/youtube/VideoResponse';
import { Store } from '../store/index';
import { Layout } from '../components/Layout/Layout';
import { VideoGrid } from '../components/VideoGrid/VideoGrid';
import { VideoGridItem } from '../components/VideoGridItem/VideoGridItem';

export const Top: VFC = () => {
  const { globalState, setGlobalState } = useContext(Store);

  useEffect(() => {
    fetchPupularData().then((res: VideoResponse) => {
      setGlobalState({
        type: 'SET_POPULAR',
        payload: { popular: res.data.items },
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <VideoGrid>
        {globalState.popular.length > 0 &&
          globalState.popular.map((popular) => {
            return <VideoGridItem key={popular.id.videoId} video={popular} />;
          })}
      </VideoGrid>
    </Layout>
  );
};
