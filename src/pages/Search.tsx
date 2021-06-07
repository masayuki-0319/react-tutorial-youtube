import { VFC, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Layout } from '../components/Layout/Layout';
import { fetchSearchData } from '../apis/index';
import { Store } from '../store/index';
import { VideoGrid } from '../components/VideoGrid/VideoGrid';
import { VideoGridItem } from '../components/VideoGridItem/VideoGridItem';

export const Search: VFC = () => {
  const { globalState, setGlobalState } = useContext(Store);
  const location = useLocation();
  const setSearchResult = async () => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('query');

    if (query) {
      await fetchSearchData(query).then((res) => {
        setGlobalState({
          type: 'SET_SEARCHED',
          payload: { searched: res.data.items },
        });
      });
    }
  };

  useEffect(() => {
    setSearchResult();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);

  return (
    <Layout>
      <VideoGrid>
        {globalState.searched ? (
          globalState.searched.map((video, index) => {
            return <VideoGridItem key={index} video={video} />;
          })
        ) : (
          <span>No Data</span>
        )}
      </VideoGrid>
    </Layout>
  );
};
