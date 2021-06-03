import { VFC, useContext, useEffect } from 'react';
import { Layout } from '../components/Layout/Layout';
import { fetchPupularData } from '../apis/index';
import { Store } from '../store/index';

export const Top: VFC = () => {
  const { globalState, setGlobalState } = useContext(Store);

  useEffect(() => {
    fetchPupularData().then((res: any) => {
      console.log(res);
      setGlobalState({
        type: 'SET_POPULAR',
        payload: { popular: res.data.items },
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(globalState);

  return <Layout>TOP ページ</Layout>;
};
